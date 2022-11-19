class ValidateLogin {

   constructor() {
      this.user = document.querySelector(".user");
      this.password = document.querySelector(".password");

      this.validate();
   }

   validate() {
      document.addEventListener("submit", (event) => {
         event.preventDefault();

         const validUser = this.validatesUser(this.user);
         const validPassword = this.validatesPassword(this.password);

         if (validUser && validPassword) {
            console.log("Login efetuado");
         }

      });
   }

   validatesUser(fieldUser) {
      let valid = false;

      if (fieldUser.value === 'guilherme') {
         valid = true;
         this.deleteErrorUser(this.user);
      }
      else {
         this.deleteErrorUser(fieldUser);
         this.createError(fieldUser, 'Usuario inválido');
      }
      return valid;
   }

   validatesPassword(fieldPassword) {
      let valid = false;

      if (fieldPassword.value === '123') {
         valid = true;
         this.deleteErrorPassword(this.password);
      }
      else {
         this.deleteErrorPassword(fieldPassword);
         this.createError(fieldPassword, 'Senha inválida');
      }
      return valid;
   }

   createError(field, message) {

      const div = document.createElement('div');
      div.innerHTML = message;

      if (field.classList.contains('user')) {
         div.classList.add('error-user');
      } else {
         div.classList.add('error-password');
      }

      field.insertAdjacentElement('afterend', div);
   }

   deleteErrorUser(field) {
      if (document.querySelector('.error-user')) {
         field.parentNode.removeChild(document.querySelector('.error-user'));
      }
   }

   deleteErrorPassword(field) {
      if (document.querySelector('.error-password')) {
         field.parentNode.removeChild(document.querySelector('.error-password'));
      }
   }

}

const login = new ValidateLogin();