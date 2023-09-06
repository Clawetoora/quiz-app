"use client";
import styles from "./page.module.css";
export default function Result(props) {
  return (
    <div className={styles.containerAnswer}>
      <h1>
        Jūs atsakėte teisingai į {props.result} klausimus per{" "}
        <span>{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}s </span>
        <span>{("0" + ((props.time / 10) % 100)).slice(-2)}ms</span> tai yra{" "}
        {props.result <= 3
          ? Math.trunc((props.result / props.time) * 10000)
          : Math.trunc((props.result / props.time) * 100000)}{" "}
        taškai
      </h1>
      <p className={styles.zvaigzdute}>
        *Taškų kiekis LABAI priklauso nuo teisingų atsakymų skaičiaus
      </p>
      <p>
        bet renginyje apie kibernetinį saugumą pasidalinai savo duomenimis 😁
      </p>
      <div>
        {props.name} {props.lastname} {props.email}
      </div>
    </div>
  );
}
