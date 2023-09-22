"use client";
import Image from "next/image";
import qr from "../../public/frame.png";
import styles from "./page.module.css";
export default function Result(props) {
  return (
    <div className={styles.containerAnswer}>
      <h1>
        Jūs atsakėte teisingai į{" "}
        <span style={{ color: "#29F206" }}>{props.result} </span>klausimus per{" "}
        <span style={{ color: "#29F206" }}>
          {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}s{" "}
        </span>
        <span style={{ color: "#29F206" }}>
          {("0" + ((props.time / 10) % 100)).slice(-2)}ms
        </span>{" "}
        tai yra{" "}
        <span style={{ color: "#29F206" }}>
          {props.result <= 3
            ? Math.trunc((props.result / props.time) * 10000)
            : Math.trunc((props.result / props.time) * 200000)}{" "}
        </span>
        taškai
      </h1>

      <p className={styles.zvaigzdute}>
        Ar žinojai, kad visame psaulyje kiekvieną sekundę nutekinami 63 el.pašto
        adresai, tu tapai vienu iš jų! 😁
      </p>
      <p
        style={{
          backgroundColor: "red",
          padding: "5px 10px",
          borderRadius: "5px",
          margin: "5px 0 5px 0",
        }}
        className={styles.zvaigzdute}
      >
        Juokauju, tavo el.paštas su mumis saugus!
      </p>
      <div>{props.email}</div>
      <p className={styles.zvaigzdute}>
        <Image src={qr} alt="qr code" width={120}></Image>
        <br />
        Sužinok daugiau apie{" "}
        <strong style={{ textTransform: "uppercase" }}>
          kibernetinį saugumą
        </strong>{" "}
        mūsų mokymuose!
      </p>
    </div>
  );
}
