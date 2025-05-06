/// http://localhost:3000/heesoon/button

"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.scss";

//component
import Child from "./Child";

//assets
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";

const Btn = () => {
    const [color, setColor] = useState<string>("black");
    const [width, setWidth] = useState<number>(150);

    // 스타일 객체
    const style = {
        backgroundColor: color,
        width: width,
    };

    console.log(`[color: ${color}] [size: ${width}]`);

    return (
        <div className={styles.container}>
            <h1>props 전달</h1>
            <div className={styles.inner}>
                <div>
                    <div className={styles.parent}>
                        <h2 className={styles.title}>부모 컴포넌트</h2>
                        <span style={style}></span>
                    </div>

                    <div className={styles.child}>
                        <h2 className={styles.title}>자식 컴포넌트</h2>
                        <Child width={width} setColor={setColor} setWidth={setWidth} />
                    </div>
                </div>
                <div className={styles.imageWrap}>
                    <h2 className={styles.title}>참고용 코드</h2>
                    <div>
                        <div>
                            <p>1. Btn.tsx</p>
                            <Image src={img1} alt="1" />
                        </div>
                        <div>
                            <p>2. Child.tsx</p>
                            <Image src={img2} alt="2" />
                        </div>
                        <div>
                            <p>3. 타입 오류</p>
                            <Image src={img3} alt="3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Btn;
