import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import styles from './FormLogin.module.css';
import { Link } from "react-router-dom";

const schema = yup.object({
  user: yup.string().required('Please enter your user'),
  password: yup.string().required('Please enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
}).required();

type FormData = yup.InferType<typeof schema>;

export default function FormLogin() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: FormData) => console.log(data);
  return (
    <div className={styles.content}>
      <div className={styles.title}><h3>Hello, Friend!</h3>
      <button type="submit"><Link to={`/register`}>Sign Up</Link></button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h3>Sign In</h3>
        <div className={styles.form_item}>
          <label htmlFor="">User:</label>
          <input placeholder="User" {...register("user")} />
          <p className='text-red-500'>{errors.user?.message}</p>
        </div>
        <div  className={styles.form_item}>
          <label htmlFor="">PassWord:</label>
          <input placeholder="Password" {...register("password")} />
          <p className='text-red-500'>{errors.password?.message}</p>
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}