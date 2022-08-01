import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeContext";
import BlogCard from "./BlogCard";
import Title from "./Title";

import figma from "../img/figma.jpg";
import python from "../img/python.png";
import python2 from "../img/python2.png";
import fitness from "../img/fitness.png";
import css from "../img/css.png";
import react from "../img/react.png";

function BlogsSection() {
  const theme = useTheme();
  return (
    <BlogsSectionStyled className="u-pad-lg-2" theme={theme}>
      <div className="title-con">
        <Title
          name={"Member of YKBUT"}
          subtext="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut ratione atque blanditiis at, 
                        nihil nemo necessitatibus dignissimos nisi repellat quasi! Unde molestias tenetur at?"
        />
      </div>
      <div className="blogs-container">
        <BlogCard
          title={"UT SCHOOL"}
          name={"Figma"}
          subtext={
            "Lembaga Pendidikan Keterampilan Mekanik, Operator Alat-alat Berat serta Konstruksi Terbaik di Dunia"
          }
          date={"Feb 27, 2008"}
          image={figma}
        />
        {/* <BlogCard
                    title="YKBUT Learning Center"
                    name={'Pyhton'}
                    subtext={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro animi esse molestiae.'}
                    date={'Jun 10, 2021'}
                    image={python2}
                />
                <BlogCard
                    title="UT Day Care"
                    name={'Python'}
                    subtext={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro animi esse molestiae.'}
                    date={'Apr 05, 2021'}
                    image={python} /> */}
        <BlogCard
          title="LSP ABI"
          name={"HTML5 & CSS"}
          subtext={
            "Lembaga pendukung Badan Nasional Sertifikasi Profesi (BNSP) sebagai lembaga sertifikasi profesi dibidang alat berat kelas dunia."
          }
          date={"Aug 12, 2021"}
          image={css}
        />
        <BlogCard
          title="PT GLOBAL SERVICE INDONESIA"
          name={"React.js"}
          subtext={
            "Penyediaan jasa SDM bidang Administrasi dan IT berbagai perusahaan di Astra Group"
          }
          date={"Jan 17, 2021"}
          image={react}
        />
        <BlogCard
          title="PT MITRA BAKTI UT"
          name={"Figma"}
          subtext={
            "Perusahaan building management yang diakui keberadaannya di Indonesia, peduli akan lingkungan, serta dapat dipercaya."
          }
          date={"Mar 10, 2020"}
          image={fitness}
        />
        <BlogCard
          title="PT DIAN PANDU PRATAMA"
          name={"Pyhton"}
          subtext={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro animi esse molestiae."
          }
          date={"Jun 10, 2021"}
          image={python2}
        />
        <BlogCard
          title="PT KAMAJU"
          name={"Pyhton"}
          subtext={
            "Penyedia Jasa Mekanik dan Operator Alat-Alat Berat bagi perusahaan-perusahaan di Astra Group "
          }
          date={"Jun 10, 2021"}
          image={python2}
        />
      </div>
    </BlogsSectionStyled>
  );
}

const BlogsSectionStyled = styled.section`
  .blogs-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 2rem;
    padding-top: 3rem;
  }
`;

export default BlogsSection;
