import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
    name : Yup.string().required('این فیلد الزامی می‌باشد'),
    email : Yup.string().required('این فیلد الزامی می‌باشد').email('فرمت ایمیل معتبر نمی‌باشد'),
    password : Yup.string().required('این فیلد الزامی می‌باشد').min(6 , 'کلمه عبور باید بیشتر از 6 کاراکتر باشد'),
    confirmPassword : Yup.string().required('این فیلد الزامی می‌باشد').oneOf([Yup.ref('password')] , 'تکرار کلمه عبور صحیح نمی‌باشد'),
    role : Yup.string().required('این فیلد الزامی می‌باشد'),
    status : Yup.string().required('این فیلد الزامی می‌باشد')
})

export default validationSchema