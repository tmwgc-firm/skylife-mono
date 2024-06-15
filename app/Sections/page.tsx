'use client'
import Image from "next/image";
import { motion } from 'framer-motion';
import { useEffect,useState, ChangeEvent, FormEvent } from "react";
import styles from "./section.module.css";
import FAQSection from "../Faq/page";

const images = [                              /*for image transition on second section*/
  { src: '/group45.svg', alt: 'Group 45' },
  { src: '/group46.svg', alt: 'Group 46' },
  { src: '/group47.svg', alt: 'Group 47' },
];

const transition = {
  type: "spring",
  mass: 1,
  stiffness: 100,
  damping: 15
};

interface FormData {
  name: string;
  subject: string;
  email: string;
  phone: string;
  message: string;
}

export default function Sections() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    subject: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      alert(result.message); 
    } else {
      alert(`Failed to send email: ${result.message}`);
      console.error(result.error);
    }
  };

  return (
    // second section of lander page
    <div>
      <div className={styles.secondsection}>
        <div className={styles.aboutus}>
         <motion.div 
            className={styles.Animation}
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
          >
            <Image 
              src={images[currentImage].src} 
              alt={images[currentImage].alt} 
              height={443.55} 
              width={446.14} 
            />
          </motion.div> 
          
          <div className={styles.mobileanimate}>
            <Image src={'animate1-mob.svg'} alt="animation" height={340} width={312} />
          </div>

          <div className={styles.whoweare}>

            <p className={styles.specialheading}>WHO WE ARE?</p>


            <h2>Your Trusted Insurance Partner<span className={styles.dot}>.</span></h2>

            <p>Sky Financial is a leading provider of life insurance and annuity solutions nationwide. With years of experience helping clients achieve financial security, we have earned a reputation for excellence and reliability in the insurance industry.</p>
            <p>Our dedicated team of agents is committed to providing personalized service and innovative solutions tailored to meet the unique needs of each client. We understand that every individual&apos;s financial situation is different, and we take the time to listen and recommend the best options for your needs and goals.</p>
            <p>At Sky Financial, we are passionate about helping our clients secure their financial futures and enjoy peace of mind knowing that their loved ones are protected.</p>
          </div>
        </div>

        <div className={styles.roadmap}>
          <div className={styles.route}>
            <span className={styles.middleline}></span>
          </div>



          <div className={styles.grids}>
            <div className={styles.grid1}>
              <div className={styles.text}>
                <Image src={'/grid1.svg'} alt="annunities image" width={64} height={64} />

                <p className={styles.subhead}>Annuities</p>

                <h3>Secure Your Retirement</h3>

                <p>Planning for retirement is a crucial step in achieving long-term financial security. Annuities offer a reliable way to generate guaranteed income for life, ensuring that you can enjoy your retirement years with confidence.</p>

                <p>At Sky Financial, we specialize in annuity products tailored to the needs of high net worth individuals. Our exclusive offerings provide competitive returns and tax advantages, allowing you to maximize your retirement savings and enjoy a worry-free future.</p>

                <p>Whether you&apos;re looking for immediate income or a deferred annuity to supplement your retirement savings, our team of experts will help you navigate the options and find the right solution for your needs.</p>
              </div>

            </div>

            <div className={styles.grid2}>

              <div className={styles.text2}>
                <Image src={'/grid2.svg'} alt="insurance picture" width={64} height={64} />

                <p>Life Insurance</p>

                <h3>Protecting What Matters Most</h3>

                <p>Comprehensive Coverage for Peace of Mind: Our life insurance plans offer robust protection, ensuring you and your family can face life&apos;s uncertainties with confidence.</p>

                <p>Whether you&apos;re a young family just starting out or a retiree looking to leave a legacy, our experienced agents will work closely with you to understand your needs and goals, and recommend a policy that fits your budget and lifestyle.</p>

                <p>With Sky Financial, you can rest assured that your loved ones will be taken care of no matter what the future holds.</p>
              </div>

            </div>

            <div className={styles.grid1}>
              <div className={styles.text}>
                <Image src={'/grid3.svg'} alt="tax benefit image" height={64} width={64} />

                <p>Tax Benefit Programs</p>

                <h3>Maximize Your Savings</h3>

                <p>Life insurance and annuities offer significant tax benefits that can help you maximize your savings and minimize your tax liability. With life insurance, the death benefit is typically paid out to your beneficiaries tax-free, providing them with financial security without the burden of taxes.</p>

                <p>Similarly, annuities offer tax-deferred growth, meaning you won&apos;t pay taxes on your earnings until you start receiving income. This allows your retirement savings to grow faster and gives you more control over when you pay taxes.</p>

                <p>At Sky Financial, we can help you take advantage of these tax benefit programs and create a comprehensive financial strategy that minimizes your tax liability while maximizing your savings potential.</p>
              </div>

            </div>
          </div>


        </div>
      </div>

      {/* third section of lander page */}

      <div className={styles.thirdsection}>
        <div className={styles.getstarted}>

          <p className={styles.specialheading1}>GET STARTED TODAY</p>

          <h2>Ready to take the next step towards financial security<span className={styles.dot}>?</span></h2>

          <p>Contact <span className={styles.inline}>SKY FINANCIAL</span> today to schedule a consultation with one of our experienced agents. We&apos;re here to answer your questions, address your concerns, and help you find the perfect insurance solutions for your needs.</p>


        </div>

        {/* form data */}
        <div className={styles.right}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.namesub}>
              <div className={styles.name}>
                <Image src={'/user.svg'} alt="user image" width={20} height={20} />
                <div className={styles.formline}></div>
                <input
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange} />
              </div>

              <div className={styles.name}>
                <Image src={'/user.svg'} alt="user image" width={20} height={20} />
                <div className={styles.formline}></div>
                <input
                  placeholder="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.emailphone}>
              <div className={styles.name}>
                <Image src={'/mail.svg'} alt="mail image" width={20} height={20} />
                <div className={styles.formline}></div>
                <input
                  placeholder="E-mail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.name}>
                <Image src={'/phone.svg'} alt="phone image" width={20} height={20} />
                <div className={styles.formline}></div>
                <input
                  placeholder="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

            </div>

            <div className={styles.message}>
              <input
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit">Get in touch</button>



          </form>
        </div>
      </div>

      {/* fourth section of lander page */}
      < FAQSection />
    </div>
  );
}