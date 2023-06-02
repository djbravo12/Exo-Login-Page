import * as Yup from "yup"

const validate = Yup.object({
    email: Yup.string().email().matches(/^[(\w\d\W)+]+@[\w+]+\.[\w+]+$/i, { excludeEmptyString: true }).required(),
    password: Yup.string().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/).required()
})

export default validate