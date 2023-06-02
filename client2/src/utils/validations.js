const validate = values => {
    const errors = {}
    if(!values.fullname) {
        errors.fullname = 'Campo obligatorio'
    }
    if (!values.userName) {
      errors.userName = 'Campo obligatorio'
    } else if (values.userName.length < 4) {
      errors.userName = 'El nombre de usuario debe tener al menos 4 caracteres'
    }
    if (!values.email) {
      errors.email = 'Campo obligatorio'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Formato de email inválido'
    }
    if (!values.password) {
      errors.password = 'Campo obligatorio'
    } else if (values.password.length < 8) {
      errors.password = 'La contraseña debe tener al menos 8 caracteres'
    } else if (values.password.length > 20) {
      errors.password = 'La contraseña debe tener menos de 20 caracteres'
    }

    if (!values.passwordConfirm) {
        errors.passwordConfirm = 'Campo obligatorio'
    } else if (values.password !== values.passwordConfirm) {
        errors.passwordConfirm = 'Las contraseñas no coinciden'
    }

    if (!values.phone) {
        errors.phone = 'Campo obligatorio'
    } else if (values.phone.length !== 9) {
        errors.phone = 'El teléfono debe tener 9 dígitos'
    }

    if (!values.linkedin) {
        errors.linkedin = 'Campo obligatorio'
    }

    if (!values.city) {
        errors.city = 'Campo obligatorio'
    }

    if (!values.country) {
      errors.country = 'Campo obligatorio'
    }
    return errors
  }

  export default validate;