import React, { useState, type FormEvent } from "react";
import { useSetAtom, useAtomValue } from "jotai";
import {
  firstNameAtom,
  lastNameAtom,
  ageAtom,
  hobbiesAtom,
} from "../atoms/user.atom";

const User = () => {
  const [firstnameInput, setFirstnameInput] = useState("");
  const [lastnameInput, setLastnameInput] = useState("");
  const [ageInput, setAgeInput] = useState(0);
  const [hobbiesInput, setHobbiesInput] = useState<string[]>([]);

  const setFirstName = useSetAtom(firstNameAtom);
  const setLastName = useSetAtom(lastNameAtom);
  const setAge = useSetAtom(ageAtom);
  const setHobbies = useSetAtom(hobbiesAtom);

  const firstName = useAtomValue(firstNameAtom);
  const lastName = useAtomValue(lastNameAtom);
  const age = useAtomValue(ageAtom);
  const hobbies = useAtomValue(hobbiesAtom);

  const hobbyList = ["music", "sports", "coding"];

  const handleToggleHobby = (hobby: string) => {
    setHobbiesInput((prev) =>
      prev.includes(hobby)
        ? prev.filter((item) => item !== hobby)
        : [...prev, hobby],
    );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFirstName(firstnameInput);
    setLastName(lastnameInput);
    setAge(Number(ageInput));
    setHobbies(hobbiesInput);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          marginBottom: "30px",
          padding: "15px",
          border: "1px solid #ccc",
        }}
      >
        <h3>User Profile Result</h3>
        <p>
          <b>Full Name:</b> {firstName} {lastName}
        </p>
        <p>
          <b>Age:</b> {age}
        </p>
        <div>
          <b>Hobbies:</b>
          {hobbies.length > 0 ? (
            <ul>
              {hobbies.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          ) : (
            " No hobbies selected"
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          value={firstnameInput}
          onChange={(e) => setFirstnameInput(e.target.value)}
          placeholder="First Name"
        />
        <input
          value={lastnameInput}
          onChange={(e) => setLastnameInput(e.target.value)}
          placeholder="Last Name"
        />
        <input
          type="number"
          value={ageInput}
          onChange={(e) => setAgeInput(Number(e.target.value))}
        />

        <div style={{ margin: "10px 0" }}>
          {hobbyList.map((hobby) => (
            <label key={hobby} style={{ marginRight: "10px" }}>
              <input
                type="checkbox"
                checked={hobbiesInput.includes(hobby)}
                onChange={() => handleToggleHobby(hobby)}
              />
              {hobby}
            </label>
          ))}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default User;
