import { experience } from "./data";

export const Experience = () => {
  return (
    <div id="experience">
      <div className="pro1">
        {experience?.map((item, index) => (
          <div
            key={index}
            className={`pro ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="card">
              <div className="cardHeader">
                <h3>{item?.name}</h3>
                <span>{item?.date}</span>
              </div>

              <p className="tech">{item?.technology}</p>

              <ul className="list">
                {item?.roleResponsibility?.map((res, i) => (
                  <li key={i}>{res}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};