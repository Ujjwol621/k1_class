import "./FormHandlingAssignment.css";
import { useState } from "react";

function FormHandlingAssignment() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "",
    subjects: [],
    resume: null,
    url: "",
    choice: "",
    about: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container">
      <h1>Form in React</h1>
      <form onSubmit={() => handleSubmit()} action="">
        <div className="firstname">
          <label htmlFor="">First Name*</label>
          <br />
          <input
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            type="text"
            placeholder="Enter first name"
          />
        </div>
        <div className="lastname">
          <label htmlFor="">Last Name*</label>
          <br />
          <input
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            type="text"
            placeholder="Enter last name"
          />
        </div>
        <div className="email">
          <label htmlFor="">Enter Email*</label>
          <br />
          <input
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            type="email"
            placeholder="Enter email"
          />
        </div>
        <div className="contact">
          <label htmlFor="">Contact*</label>
          <br />
          <input
            onChange={(e) =>
              setFormData({ ...formData, contact: e.target.value })
            }
            type="text"
            placeholder="Enter contact number"
          />
        </div>
        <div className="gender">
          <label htmlFor="">Gender*</label>
          <br />
          <input
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
            type="radio"
            name="gender"
            value="male"
          />
          <label htmlFor=""> Male</label>
          <input
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
            type="radio"
            name="gender"
            value="female"
          />
          <label htmlFor=""> Female</label>
          <input
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
            type="radio"
            name="gender"
            value="other"
          />
          <label htmlFor=""> Other</label>
        </div>
        <div className="best-subjects">
          <label htmlFor="">Best Subjects*</label>
          <br />
          <input
            onChange={(e) =>
              setFormData({
                ...formData,
                subjects: e.target.checked
                  ? [...formData.subjects, e.target.value]
                  : formData.subjects.filter((v) => v !== e.target.value),
              })
            }
            type="checkbox"
            name="subjects"
            value="maths"
          />
          <label htmlFor=""> English</label>
          <input
            onChange={(e) =>
              setFormData({
                ...formData,
                subjects: e.target.checked
                  ? [...formData.subjects, e.target.value]
                  : formData.subjects.filter((v) => v !== e.target.value),
              })
            }
            type="checkbox"
            name="subjects"
            value="science"
          />
          <label htmlFor=""> Maths</label>
          <input
            onChange={(e) =>
              setFormData({
                ...formData,
                subjects: e.target.checked
                  ? [...formData.subjects, e.target.value]
                  : formData.subjects.filter((v) => v !== e.target.value),
              })
            }
            type="checkbox"
            name="subjects"
            value="english"
          />
          <label htmlFor=""> Physics</label>
        </div>
        <div className="upload-resume">
          <label htmlFor="">Upload Resume*</label>
          <br />
          <input
            onChange={(e) =>
              setFormData({ ...formData, resume: e.target.files[0] })
            }
            type="file"
          />
        </div>
        <div className="url">
          <label htmlFor="">Enter URL*</label>
          <br />
          <input
            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
            type="url"
            placeholder="Enter URL"
          />
        </div>
        <div className="select-choice">
          <label htmlFor="">Select your choice*</label>
          <br />
          <select
            onChange={(e) =>
              setFormData({ ...formData, choice: e.target.value })
            }
            name="choices"
            id=""
          >
            <option value="">Select your ans</option>
            <option value="option1">Answer 1</option>
            <option value="option2">Answer 2</option>
            <option value="option3">Answer 3</option>
          </select>
        </div>
        <div className="textarea">
          <label htmlFor="">About</label>
          <br />
          <textarea
            name="additional-info"
            id=""
            cols="30"
            rows="5"
            placeholder="About Yourself"
            onChange={(e) =>
              setFormData({ ...formData, about: e.target.value })
            }
          ></textarea>
        </div>
        <div className="submit-btn">
          <label htmlFor="">Submit OR Reset</label>
          <br />
          <button type="reset">Reset</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FormHandlingAssignment;
