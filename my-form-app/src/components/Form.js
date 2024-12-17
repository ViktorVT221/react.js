import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../App.css"; // Підключаємо стилі

// Створення схеми валідації за допомогою yup
const validationSchema = yup.object({
  name: yup.string().required("Ім'я є обов'язковим").min(3, "Мінімум 3 символи"),
  email: yup
    .string()
    .required("Email є обов'язковим")
    .email("Некоректний формат email"),
  age: yup
    .number()
    .required("Вік є обов'язковим")
    .positive("Вік має бути додатнім числом")
    .integer("Вік має бути цілим числом"),
  website: yup
    .string()
    .url("Некоректний URL-адрес")
    .required("Посилання є обов'язковим")
    .matches(
      /^(https?:\/\/)?(www\.)?kickstarter\.com\/start(\/.*)?$/,
      "URL має бути посиланням на Kickstarter"
    ),
});

export default function Form() {
  // Ініціалізація useForm з валідацією через yup
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Обробник при сабміті форми
  const onSubmit = (data) => {
    console.log(data); // Вивести дані форми в консоль
  };

  return (
    <div className="form-container">
      <h2>Форма реєстрації</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        {/* Поле для імені */}
        <div className="form-group">
          <label>Ім'я:</label>
          <input className="form-input" {...register("name")} />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        {/* Поле для email */}
        <div className="form-group">
          <label>Email:</label>
          <input className="form-input" {...register("email")} />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        {/* Поле для віку */}
        <div className="form-group">
          <label>Вік:</label>
          <input className="form-input" type="number" {...register("age")} />
          {errors.age && <p className="error">{errors.age.message}</p>}
        </div>

        {/* Поле для посилання */}
        <div className="form-group">
          <label>Посилання (наприклад, Kickstarter):</label>
          <input className="form-input" {...register("website")} />
          {errors.website && <p className="error">{errors.website.message}</p>}
        </div>

        {/* Кнопка для відправлення форми */}
        <button className="submit-btn" type="submit">Надіслати</button>
      </form>
    </div>
  );
}
