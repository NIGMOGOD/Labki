function createNewUser() {
    const firstName = prompt('Введите имя').trim();
    const lastName = prompt('Введите фамилию').trim();
    const birthday = prompt('Введите вашу дату рождения в формате ДД.ММ.ГГГГ').trim();

    if (!firstName || !lastName || !birthday) {
        alert('Все поля должны быть заполнены.');
        return;
    }

    const newUser = {
        firstName: firstName,
        lastName: lastName,
        birthday: birthday,

        getLogin() {
            return this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase();
        },

        getAge() {
            const birthDateParts = this.birthday.split('.');
            if (birthDateParts.length !== 3) {
                alert('Дата рождения должна быть в формате ДД.ММ.ГГГГ');
                return null;
            }

            const birthDate = new Date(+birthDateParts[2], birthDateParts[1] - 1, +birthDateParts[0]);
            if (isNaN(birthDate)) {
                alert('Некорректная дата рождения');
                return null;
            }

            const diff = Date.now() - birthDate.getTime();
            const ageDate = new Date(diff);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        },

        getPassword() {
            const birthYear = this.birthday.split('.')[2];
            return this.firstName.charAt(0).toUpperCase() + this.lastName.toLowerCase() + birthYear;
        }
    };

    return newUser;
}

const user = createNewUser();
if (user) {
    console.log("Логин пользователя:", user.getLogin());
    console.log("Возраст пользователя:", user.getAge());
    console.log("Пароль пользователя:", user.getPassword());
}
