import { useEffect } from "react"

export default function Profile() {
    useEffect(function () {
        document.title = "PROFILE";
      }, []);

    return(
        <section className="section">
        <h1 className="section-title">PROFILE</h1>
        <p className="section-description">Halo namaku Brucel, aku adalah seorang Web Developer yang baru mulai belajar React.js</p>
        </section>
    )
}