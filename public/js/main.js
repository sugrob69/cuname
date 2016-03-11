'use strict';

var cAuth = function () {
    var email = document.getElementById('email'),
        password = document.getElementById('password'),
        password2 = document.getElementById('repeat_password'),
        form = document.getElementById('auth-form');

    return {
        checkLength: function checkLength(el, length) {
            return el.value.length > length;
        },
        checkEmail: function checkEmail() {
            if (!this.checkLength(email, 5)) {
                email.parentElement.classList.add('has-error');
                return false;
            }

            email.parentElement.classList.remove('has-error');
            return true;
        },
        checkPassword: function checkPassword() {
            if (password2) {
                if (!this.checkLength(password, 5) || password.value !== password2.value) {
                    password.parentElement.classList.add('has-error');
                    password2.parentElement.classList.add('has-error');
                    return false;
                }

                password.parentElement.classList.remove('has-error');
                password2.parentElement.classList.remove('has-error');
                return true;
            } else {
                if (!this.checkLength(password, 5)) {
                    password.parentElement.classList.add('has-error');
                    return false;
                }
            }

            password.parentElement.classList.remove('has-error');
            return true;
        },
        event: function event() {
            form.onsubmit = function () {
                return cAuth.checkEmail() && cAuth.checkPassword();
            };
        },
        init: function init() {
            form && this.event();
        }
    };
}();

var cLogout = function () {
    var logout = document.getElementById('logout');

    return {
        xhrLogout: function xhrLogout(e) {
            e.preventDefault();

            var xhr = new XMLHttpRequest(),
                url = '/logout';

            xhr.open('POST', url, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState != 4) return;
                if (xhr.status != 200) {
                    alert("Ошибка!");
                } else {
                    location.href = "/";
                }
            };
            xhr.send();
        },
        event: function event() {
            logout.addEventListener('click', this.xhrLogout);
        },
        init: function init() {
            logout && this.event();
        }
    };
}();

/* =========== INIT FUNCTION =========== */
cAuth.init();
cLogout.init();
//# sourceMappingURL=main.js.map
