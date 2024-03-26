import Image from "next/image";

const imageDetails = [
    {
      component: (
        <Image
          key="adrean1"
          src="/images/adrean1.png"
          width={500}
          height={500}
          className="absolute bottom-0 w-[28rem] mx-auto right-0 left-0 select-none tablet-s:w-[23rem] mobile-xs:w-[21rem]"
          alt="Adrean Cajigas"
        />
      ),
      title: "Adrean Cajigas",
      header: "Hi, I am the one and only",
    },

    {
      component: (
        <Image
          key="adrean4"
          src="/images/adrean4.png"
          width={500}
          height={500}
          className="absolute bottom-0 w-[26rem] mx-auto right-10 left-0 select-none tablet-s:w-[21rem] mobile-xs:w-[19rem]"
          alt="Adrean Cajigas"
        />
      ),
      title: "College Student",
      header: "I'm currently a full-time CS",
    },

    {
      component: (
        <Image
          key="adrean6"
          src="/images/adrean6.png"
          width={500}
          height={500}
          className="absolute bottom-0 w-[20.5rem] mx-auto right-0 left-0 select-none tablet-s:w-[17rem] mobile-xs:w-[16rem]"
          alt="Adrean Cajigas"
        />
      ),
      title: "Web Developer",
      header: "I love creating projects as a",
    },

    {
      component: (
        <Image
          key="adrean8"
          src="/images/adrean8.png"
          width={500}
          height={500}
          className="absolute bottom-0 w-[35rem] mx-auto right-0 left-0 select-none tablet-s:w-[29rem] mobile-xs:w-[27rem]"
          alt="Adrean Cajigas"
        />
      ),
      title: "Martial Artist",
      header: "Over 12 years as a",
    },
  ];

export default imageDetails