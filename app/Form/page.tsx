"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import styles from "./form.module.css";

interface FormData {
  name: string;
  subject: string;
  email: string;
  phone: string;
  message: string;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [touched, setTouched] = useState<
    Partial<{ [key in keyof FormData]: boolean }>
  >({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prevState) => ({
      ...prevState,
      [name]: true,
    }));
    setErrors((prevState) => ({
      ...prevState,
      [name]: formData[name as keyof FormData] ? "" : "Required",
    }));
  };

  const validate = () => {
    let formErrors: Partial<FormData> = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.subject) formErrors.subject = "Subject is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.phone) formErrors.phone = "Phone number is required";
    if (!formData.message) formErrors.message = "Message is required";
    return formErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        setFormData({
          name: "",
          subject: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert(`Failed to send email: ${result.message}`);
        console.error(result.error);
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div>
      <div className={styles.thirdsection}>
        <div className={styles.form}>
          <form className={styles.sub_form} onSubmit={handleSubmit}>
            <div className={styles.overall_form}>
              <div className={styles.input_gap}>
                <div>
                  <div className={styles.input_form}>
                    <div>
                      <Image
                        src="/formuser.svg"
                        alt="user"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <input
                        placeholder="Name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="input"
                        required
                      />
                    </div>
                  </div>
                  {errors.name && (
                    <span className={styles.error}>{errors.name}</span>
                  )}
                </div>
                <div>
                  <div className={styles.input_form}>
                    <div>
                      <Image
                        src="/formuser.svg"
                        alt="user"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <input
                        placeholder="Subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="input"
                        required
                      />
                    </div>
                  </div>
                  {errors.subject && (
                    <span className={styles.error}>{errors.subject}</span>
                  )}
                </div>
              </div>

              <div className={styles.input_gap}>
                <div className={styles.req}>
                  <div className={styles.input_form}>
                    <div>
                      <Image
                        src="/formmail.svg"
                        alt="user"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <input
                        placeholder="E-mail"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="input"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    {errors.email && (
                      <span className={styles.error}>{errors.email}</span>
                    )}
                  </div>
                  <div className={styles.input_form}>
                    <div>
                      <Image
                        src="/formphone.svg"
                        alt="user"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <input
                        placeholder="Phone"
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="input"
                        required
                      />
                    </div>
                  </div>{" "}
                  {errors.phone && (
                    <span className={styles.error}>{errors.phone}</span>
                  )}
                </div>
              </div>
            </div>
            <div>
              <div className={styles.input_form_message}>
                <div className={styles.inputGroup}>
                  <input
                    placeholder="Message"
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="input"
                    required
                  />
                </div>{" "}
              </div>
              {errors.message && (
                <span className={styles.error}>{errors.message}</span>
              )}
            </div>

            <div className={styles.form_button}>
              <button type="submit" className={styles.button}>
                Get in touch
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
