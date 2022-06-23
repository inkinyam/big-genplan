export default class Form {
  constructor (formId) {
    this._form            = document.getElementById(formId);
    this._resulMessage   = this._form.querySelector('.form__message');
    this._validateUrl    = this._form.getAttribute('data-validate-url');
    this._method         = this._form.getAttribute('method');
    this._action         = this._form.getAttribute('action');
    this._spans          = this._form.querySelectorAll('.form__err');
    this._formInputs     = Array.from(this._form.querySelectorAll('.item'));
    this._formCheckBoxes = Array.from(this._form.querySelectorAll('.form__check'));
    this._setEventListeners();
  }

  // метод, получающий значение всех импутов и собирающих их в объект
  _getInputsValue () {
    this._formValues = {};
    this._formInputs.forEach(input => {
      this._formValues[input.id] = input.value;
    });
    this._formCheckBoxes.forEach(checkbox => {
      this._formValues[checkbox.id] = Number(checkbox.checked);
    })
  }

  // метод, навешивающий слушатели на элементы
  _setEventListeners () {
    this._form.addEventListener('submit', (evt)=> {
      evt.preventDefault();
      this._sendSubmitForm();
    })
  } 

  // метод, отправляющий через АПИ запрос на валидацию
  _sendValidationRequest () {
    this._getInputsValue();
  
    return fetch (this._validateUrl, {
      method: this._method,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(this._formValues)
    })
    .then ( res => { 
      if (res.ok) {
        return res.json();
      }
        return Promise.reject(`${res.status}`);
    })
  }

  // метод, отправляющий через АПИ запрос на отправку формы
  _sendAcceptRequest() {
    return fetch (this._action, {
      method: this._method,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(this._formValues)
    })
    .then ( res => { 
      if (res.ok) {
        return res.json();
      }
        return Promise.reject(`${res.status}`);
    })
  }

  // метод, который выделяет инпут как ошибочный
  _showErrInput(idElement) {
    document.getElementById(idElement).classList.add('form__input_type_err');
    document.getElementById(idElement).classList.remove('form__input_type_check');
  }

  // метод, который выделяет инпут, как правильный
  _showCheckInput (idElement) {
    document.getElementById(idElement).classList.remove('form__input_type_err');
    document.getElementById(idElement).classList.add('form__input_type_check');
  }

  // метод, который прячет спаны и очищает их
  _clearSpans() {
    this._spans.forEach(span => {
      span.classList.remove('form__err_show');
      span.textContent='';
    })
  }

  // метод, который очищает инпуты
  _clearInputsStation(){
    this._formInputs.forEach(input=>{
      input.classList.remove('form__input_type_check');
    })
  }

  // метод,к оторый отображает результат проверки
  _showValidityQueryResult(res) {
    this._clearSpans();
    this._formInputs.forEach(item => {
      if (Object.keys(res).includes(`${item.id}`)) {
        const errorElement = this._form.querySelector(`.form__err-${item.id}`);
        errorElement.classList.add('form__err_show');
        errorElement.textContent = res[item.id];
        this._showErrInput(item.id);
      } else {
        this._showCheckInput(item.id)
      }
    })
  }

  // метод, который показывает надпись "отправлено" и обновляет форму
  _showResultMessage(res){
    this._resulMessage.textContent = res['message'];
    this._resulMessage.classList.add('form__message_show');
    this._form.reset();
    this._clearInputsStation();
  }

  // метод, который убирает надпись об отправке
  _hideResultMessage() {
    this._resulMessage.textContent = '';
    this._resulMessage.classList.remove('form__message_show');
  }
  
  //метод, который отправляет значения формы на сервер 
  _sendSubmitForm(){
    this._sendValidationRequest()
      .then( res => {
        this._showValidityQueryResult(res);
        if (Object.keys(res).length == 0) {
          this._sendAcceptRequest()
          .then(res=>{this._showResultMessage(res)})
          .catch(err=>console.log(`Что-то не так. ${err}`))
        } else {
          this._hideResultMessage();
        }
      }) 
    .catch((err)=>{ console.log(`Что-то не так. ${err}`)})
  }

}
  


