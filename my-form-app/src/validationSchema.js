import * as yup from "yup";

export const validationSchema = yup.object({
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
      /^(https?:\/\/)?(www\.)?kickstarter\.com\/start/,
      "URL має бути посиланням на Kickstarter"
    ),
});
