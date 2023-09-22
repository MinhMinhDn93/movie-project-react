import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import styles from './FormRegister.module.css';
import { Link } from "react-router-dom";

const schema = yup.object({
  user: yup.string().min(4, 'Please enter your user').required(),
  age: yup.number().min(18).max(100).required('Please enter your age'),
  email: yup.string().email().required('Please enter your email'),
  password: yup.string().required('Please enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  address: yup.string().default(''),//không yêu cầu điền address
  //Giới tính chỉ chập nhận 1 trong 2 giá trị
  gender: yup.string().required('Please choose your gender').oneOf(['male', 'female'], 'Invalid gender'),
}).required();

type FormData = yup.InferType<typeof schema>;

export default function FormRegister() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: FormData) => console.log(data);
  return (
    <div className={styles.content}>
      <div className={styles.title}><h3>Welcome Back!</h3>
      <button type="submit"><Link to={`/login`}>Sign In</Link></button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h3>Register</h3>
        <div className={styles.form_item}>
          <label htmlFor="">User:</label>
          <input placeholder="User" {...register("user")} />
          <p className='text-red-500'>{errors.user?.message}</p>
        </div>
        <div className={styles.form_item}>
          <label htmlFor="">Email:</label>
          <input placeholder="Email" {...register("email")} />
          <p className='text-red-500'>{errors.email?.message}</p>
        </div>
        <div className={styles.form_item}>
          <label htmlFor="">Age:</label>
          <input placeholder="Age" {...register("age")} />
          <p className='text-red-500'>{errors.age?.message}</p>
        </div>
        <div className={styles.form_item}>
          <label htmlFor="">Address:</label>
          <input placeholder="Address" {...register("address")} />
          <p className='text-red-500'>{errors.address?.message}</p>
        </div>
        <div className={styles.form_item}>
          <label htmlFor="">PassWord:</label>
          <input placeholder="Password" {...register("password")} />
          <p className='text-red-500'>{errors.password?.message}</p>
        </div>
        <div className={styles.form_item_gender}>
          <label>
            <input type="radio" value='male' {...register("gender")} />Male
          </label>
          <label>
            <input type="radio" value='female' {...register("gender")} />Female
          </label>
          <p className='text-red-500'>{errors.gender?.message}</p>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}