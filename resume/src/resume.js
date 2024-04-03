import React from 'react';

const Resume = () => {
    return (
        <div style={{ margin: "0 50px" }}>
            <h1 style={{ color: "#281DB9", margin: "0px" }}>NELSON BARKER</h1>
            <h2 style={{ margin: "0px", color: "#FF9100" }}>Senior Data Scientist</h2>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "0px" }}>
                <p style={{ margin: "0" }}>+1-562-201-3455</p>
                <p style={{ margin: "0" }}><a href="mailto:nelson.barker@gmail.com">nelson.barker@gmail.com</a></p>
                <p style={{ margin: "0", marginRight: "300px" }}><a href="kaggle.com/nelson.barker">kaggle.com/nelson.barker</a></p>
            </div>
            <h3 style={{ color: "#0D00C4", marginTop: "27px" }}>SUMMARY</h3>
            <p style={{ marginTop: "-10px" }}>Senior Data Scientist with over 9 years of experience in the fields of e-commerce. My biggest achievement is a 50% increase in Walmart's domestic sales. After that I felt the need to contribute to a greater cause and joined CrashData with which I have been able to improve road safety by 75%.</p>
            <h3 style={{ color: "#0D00C4" }}>EDUCATION</h3>
            <p style={{ margin: "0", marginTop: "-13px", color: "#3A32B1" }}><b>2009-2013</b></p>
            <p style={{ marginTop: "-10px", margin: "0" }}> New York City, NY</p>
            <p style={{ marginTop: "-10px", margin: "0", color: "#1B0ED6" }}>B.S. Data Science</p>
            <p style={{ marginTop: "-10px", margin: "0", color: "#FF9100" }}>Columbia University in the City of New York</p>
            <ul style={{marginTop : "5px"}}>
            <li style={{ marginTop: "-10px", margin: "0" }}>Data Science Major in Foundational in Mathematics,Computing and Statistics</li>
            <li style={{ marginTop: "-10px", margin: "0" }}>Took additonal courses in Big Data Ecosystems and Data Visualisation</li>
            </ul>

            <h3 style={{ color: "#281DB9" }}>EXPERIENCE</h3>
            <p style={{ margin: "0", marginTop: "-13px", color: "#3A32B1",fontWeight : "bold" }}>2019 - Ongoing</p>
            <p style={{marginTop: "-10px" ,margin: "0"}}> Gardena,CA</p>
            <p style={{ marginTop: "-10px", margin: "0", color: "#1B0ED6" }}>Senior Data Scientist</p>
            <p style={{ marginTop: "-10px", margin: "0", color: "#FF9100" }}>CrashData</p>
            <p style={{ marginTop: "-10px", margin: "0" }}>CrashData is the leading company that gathers data from a vehical's sensors before,during and after a crash.The data is then used to improve road safety</p>
            <ul style={{marginTop : "5px"}}>
                <li style={{ marginTop: "-10px", margin: "0" }}>Joined as employee #4 when CrashData was just starting operation</li>
                <li style={{ marginTop: "-10px", margin: "0" }}>Tutored algorithms and data structures to 5 junior data scientists</li>
                <li style={{ marginTop: "-10px", margin: "0" }}>Implemented automated data reduction and evaluation with Mapreduce and Hadoop to reduce the process from eight (8) weeks to eight (8) hours</li>
                <li style={{ marginTop: "-10px", margin: "0" }}>Our work has helped over 50 car manufacturers improve their safety systems, which led to a 75% decrease in fatal crashes in 2020</li>
            </ul>
            <p style={{ margin: "0", color: "#3A32B1" }}><b>2014-2019</b></p>
            <p style={{ marginTop: "-10px", margin: "0" }}>New York City, NY</p>
            <p style={{ marginTop: "-10px", margin: "0", color: "#1B0ED6" }}>Data Scientist</p>
            <p style={{ marginTop: "-10px", margin: "0", color: "#FF9100" }}>Walmart</p>   
            <p style={{ marginTop: "-10px", margin: "0" }}>CrashData is the leading company that gathers data from a vehical's sensors before,during and after a crash.The data is then used to improve road safety</p>
                <ul style={{marginTop : "5px"}}>
                    <li>Data Science Major in Foundational courses in Mathematics, Computing and Statistics</li>
                    <li>Took additional courses in Big Data Ecosystems and Data Visualisation</li>
                </ul>
            
            <h3 style={{ color: "#0D00C4" }}>TECH SKILLS:</h3>
            <p>
                <ul>
                    <li>Python</li>
                    <li>Java</li>
                    <li>C</li>
                    <li>GIT</li>
                    <li>SAS</li>
                    <li>SPSS</li>
                    <li>R</li>
                    <li>Apache Mahout</li>
                    <li>Apache Spark</li>
                    <li>MapReduce</li>
                    <li>Hive</li>
                    <li>MangoDB NoSQL</li>
                    <li>QlikView</li>
                    <li>Tableau</li>
                    <li>Excel</li>
                </ul>
            </p>
        </div>
    );
};

export default Resume;