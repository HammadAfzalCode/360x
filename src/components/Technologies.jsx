import React, { useState } from "react";
import Container from "./Container";
import { Grid, Typography, Box, Popover, Button } from "@mui/material";
import Head from "next/head";
import SchemaMarkup from "../pages/schema";
export default function Technologies(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTech, setSelectedTech] = useState(null);

  const handleClick = (event, tech) => {
    setAnchorEl(event.currentTarget);
    setSelectedTech(tech);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedTech(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const technologies = [
    "Scikit-learn",
    "Open AI",
    "PyTorch",
    "Pandas",
    "Tensor flow",
    "SciPy",
    "Numpy",
  ];

  const technologies1 = [
    "Elastic Search",
    "Postgres",
    ".Net Core",
    "Rust",
    "VueJS",
    "Stripe",
    "Jest",
    "Jest",
    "n8n.io",
    "GraphQL",
    "ExpressJS",
    "Django",
    "MySQL",
    "Flask",
    "NodeJS",
    "Python",
    "Astro",
    "Datahub",
    "Twilio",
    "FabricJS",
    "TypeScript",
    "Elastic Kibana",
    "Angular",
    "Elastic Beats",
    "jQuery",
    "NestJS",
    "JavaScript",
    "SQL Server",
    "ReactJS",
    "MongoDB",
    "Fluentd",
    "Kafka",
  ];
  const technologies2 = [
    "Wavefront",
    "Docker",
    "Github Actions",
    "Fusion Auth",
    "Sonar Cloud",
    "GCP",
    "Microsoft Azure",
    "Jenkins",
    "AWS",
    "Kubernetes",
    "Splunk",
    "Firebase",
    "Heroku",
    "Digital Ocean",
    "Azure DevOps",
  ];
  const technologies3 = [
    "Material UI",
    "Balsamiq",
    "Adobe XD",
    "Bootstrap",
    "TailwindCSS",
    "Figma",
    "CSS3",
    "HTML5",
    "Sass",
  ];
  const technologies4 = [
    "iOS",
    "Android",
    "Swift",
    "React Native",
    "Flutter",
    "Kotlin",
  ];
  const technologies5 = ["CVAT", "DataLoop", "Plainsight"];
  const technologies6 = [
    "JMeter",
    "Cucumber",
    "Cypress",
    "Selenium",
    "Protractor",
  ];

  const logoPaths_ROW1 = [
    "./assets/Technologies_Icon_svg/Scikit_learn_logo_small_3209f2c470 1.svg",
    "./assets/Technologies_Icon_svg/openai_svgrepo_com_9ceb0f35de 1.svg",
    "./assets/Technologies_Icon_svg/Py_Torch_7c9a27994b 1.svg",
    "./assets/Technologies_Icon_svg/icons8-pandas-logo.svg",
    "./assets/Technologies_Icon_svg/tensorflow_4be369f7c4 2.svg",
    "./assets/Technologies_Icon_svg/SCIPY_2_91488703da 1.svg",
    "./assets/Technologies_Icon_svg/numpy_1b6c7c0206 1.svg",
  ];

  const logoPaths_ROW2 = [
    "./assets/Technologies_Icon_svg/elasticsearch_78203bcb97 1.svg",
    "./assets/Technologies_Icon_svg/postgresql_61e1f1b701 1.svg",
    "./assets/Technologies_Icon_svg/dot_net_core_7_e3d4be58f0 1.svg",
    "./assets/Technologies_Icon_svg/rust_lang_ar21_8c156e15a1 1.svg",
    "./assets/Technologies_Icon_svg/vuejs_ar21_041b72f50b 1.svg",
    "./assets/Technologies_Icon_svg/icons8-stripe-logo.svg",
    "./assets/Technologies_Icon_svg/Group (1).svg",
    "./assets/Technologies_Icon_svg/rabbitmq_ar21_fd0f6218a3 1.svg",
    "./assets/Technologies_Icon_svg/n8n_io_65f1264b79 1.svg",
    "./assets/Technologies_Icon_svg/graphql_logo_2_ac5df03c82 1.svg",
    "./assets/Technologies_Icon_svg/Group (5).svg",
    "./assets/Technologies_Icon_svg/djangoproject_ar21_22a7f5c37d 1.svg",
    "./assets/Technologies_Icon_svg/mysql_horizontal_aec0b8c464 2.svg",
    "./assets/Technologies_Icon_svg/pocoo_flask_ar21_acbc42d0c0 1.svg",
    "./assets/Technologies_Icon_svg/nodejs_ar21_08a8739ed0 1.svg",
    "./assets/Technologies_Icon_svg/python_ar21_bef80f0a0a 1.svg",
    "./assets/Technologies_Icon_svg/astro_3f47ee7dae 1.svg",
    "./assets/Technologies_Icon_svg/datahub_34af4b87ee 1.svg",
    "./assets/Technologies_Icon_svg/twilio_2_755f004a0c 1.svg",
    "./assets/Technologies_Icon_svg/au9we_h83p4_494f0b9712 1.svg",
    "./assets/Technologies_Icon_svg/Vector (1).svg",
    "./assets/Technologies_Icon_svg/elastic_kibana_0b268911cf 1.svg",
    "./assets/Technologies_Icon_svg/angular_ar21_ac007b71f0 1.svg",
    "./assets/Technologies_Icon_svg/elastic_beats_bedbffbe97 1.svg",
    "./assets/Technologies_Icon_svg/jquery_horizontal_7caa7b329c 1.svg",
    "./assets/Technologies_Icon_svg/nestjs_ar21_0ce9157dc0 1.svg",
    "./assets/Technologies_Icon_svg/javascript_horizontal_5a662283b5 2.svg",
    "./assets/Technologies_Icon_svg/microsoft_sql_server_1_04042abeb5 1.svg",
    "./assets/Technologies_Icon_svg/react_9493b92fb7 1.svg",
    "./assets/Technologies_Icon_svg/mongodb_ar21_8838918ebb 1.svg",
    "./assets/Technologies_Icon_svg/fluentd_ar21_d470b57771 1.svg",
    "./assets/Technologies_Icon_svg/apache_kafka_ar21_1df5ba650c 1.svg",
  ];
  const logoPaths_ROW3 = [
    "./assets/Technologies_Icon_svg/wavefront_ar21_8352c0cc10 1.svg",
    "./assets/Technologies_Icon_svg/docker_ar21_3457b32617 1.svg",
    "./assets/Technologies_Icon_svg/image0.svg",
    "./assets/Technologies_Icon_svg/fusionauthio_ar21_43142543fd 1.svg",
    "./assets/Technologies_Icon_svg/sonarcloud_wordmark_1_d6ab5fe499 1.svg",
    "./assets/Technologies_Icon_svg/google_cloud_1_26658f0d1d 1.svg",
    "./assets/Technologies_Icon_svg/microsoft_azure_ar21_643876b89e 2.svg",
    "./assets/Technologies_Icon_svg/jenkins_ar21_2162d0ce9f 1.svg",
    "./assets/Technologies_Icon_svg/aws_2_b612a59981 1.svg",
    "./assets/Technologies_Icon_svg/kubernetes_ar21_4cea765703 1.svg",
    "./assets/Technologies_Icon_svg/Frame 536.svg",
    "./assets/Technologies_Icon_svg/firebase_ar21_0617d226f3 1.svg",
    "./assets/Technologies_Icon_svg/heroku_1_e51db7da7a 1.svg",
    "./assets/Technologies_Icon_svg/Group (3).svg",
    "./assets/Technologies_Icon_svg/Group (4).svg",
  ];
  const logoPaths_ROW4 = [
    "./assets/Technologies_Icon_svg/material_ui_1_42128a6bdb 1.svg",
    "./assets/Technologies_Icon_svg/balsamiq_ar21_d363be82f9 1.svg",
    "./assets/Technologies_Icon_svg/adobe_xd_1_9cd9ea7077 1.svg",
    "./assets/Technologies_Icon_svg/getbootstrap_ar21_ebe4405ebc 2.svg",
    "./assets/Technologies_Icon_svg/tailwindcss_ar21_773d188d04 1.svg",
    "./assets/Technologies_Icon_svg/figma_ar21_7e1d58a0c7 1.svg",
    "./assets/Technologies_Icon_svg/w3_css_ar21_eacaffbd28 1.svg",
    "./assets/Technologies_Icon_svg/w3_html5_ar21_f240c3c148 1 (1).svg",
    "./assets/Technologies_Icon_svg/sass_lang_ar21_598a0afe98 1.svg",
  ];
  const logoPaths_ROW5 = [
    "./assets/Technologies_Icon_svg/apple_ios_a09a3131c8 1.svg",
    "./assets/Technologies_Icon_svg/android_ar21_467fa2f11e 1.svg",
    "./assets/Technologies_Icon_svg/swift_ar21_54a2e1e8ca 1.svg",
    "./assets/Technologies_Icon_svg/icons8-react-native.svg",
    "./assets/Technologies_Icon_svg/fluter_4x_16c4d71314 1.svg",
    "./assets/Technologies_Icon_svg/kotlinlang_ar21_a0ee6214b3 1 (1).svg",
  ];
  const logoPaths_ROW6 = [
    "./assets/Technologies_Icon_svg/cvat_97183e147a 1.svg",
    "./assets/Technologies_Icon_svg/dataloop_be5f92369d 1.svg",
    "./assets/Technologies_Icon_svg/E03_F0_E812_FA_7_AC_7_A_3f7ac3de66 1.svg",
    "./assets/Technologies_Icon_svg/E03_F0_E812_FA_7_AC_7_A_3f7ac3de66 1.svg",
  ];
  const logoPaths_ROW7 = [
    "./assets/Technologies_Icon_svg/Jmeter_43a2ed20d9 1.svg",
    "./assets/Technologies_Icon_svg/cucumber_e3a2c54f37 1.svg",
    "./assets/Technologies_Icon_svg/cypress_f6bfd23dff 1.svg",
    "./assets/Technologies_Icon_svg/Group (2).svg",
    "./assets/Technologies_Icon_svg/protractor_a706b82595 1.svg",
  ];

  // Define content for each technology
  const technologyPractice = {
    "Scikit-learn": "4 years",
    "Open AI": "3 years.",
    PyTorch: "4 years.",
    Pandas: "5 years.",
    "Tensor flow": "3 years.",
    SciPy: "4 years.",
    Numpy: "5 years",
  };

  const technologyPractice1 = {
    "Elastic Search": "5 years.",
    Postgres: "3 years.",
    ".Net Core": "2 years.",
    Rust: "2 years.",
    VueJS: "5 years.",
    Stripe: "2 years.",
    Jest: "2 years",
    Jest: "3 years.",
    "n8n.io": "2 years.",
    GraphQL: "2 years.",
    ExpressJS: "4 years.",
    Django: "3 years.",
    MySQL: "5 years.",
    Flask: "3 years",
    NodeJS: "4 years.",
    Python: "5 years.",
    Astro: "2 years.",
    Datahub: "2 years.",
    Twilio: "2 years.",
    FabricJS: "2 years.",
    TypeScript: "3 years",
    "Elastic Kibana": "2 years.",
    Angular: "3 years.",
    "Elastic Beats": "2 years.",
    jQuery: "4 years.",
    NestJS: "3 years.",
    JavaScript: "7 years",
    "SQL Server": "4 years.",
    ReactJS: "5 years.",
    MongoDB: "3 years.",
    Fluentd: "3 years",
    Kafka: "2 years",
  };

  const technologyPractice2 = {
    Wavefront: "3 years.",
    Docker: "3 years.",
    "Github Actions": "4 years.",
    "Fusion Auth": "2 years.",
    "Sonar Cloud": "2 years.",
    GCP: "3 years.",
    "Microsoft Azure": "3 years",
    Jenkins: "2 years",
    AWS: "4 years",
    Kubernetes: "2 years",
    Splunk: "2 years",
    Firebase: "3years",
    Heroku: "2 years",
    "Digital Ocean": "2years",
    "Azure DevOps": "3 years",
  };

  const technologyPractice3 = {
    "Material UI": "3 years.",
    Balsamiq: "2 years.",
    "Adobe XD": "2 years.",
    Bootstrap: "4 years.",
    TailwindCSS: "3 years.",
    Figma: "5 years.",
    CSS3: "5 years",
    HTML5: "5 years",
    Sass: "2 years",
  };

  const technologyPractice4 = {
    iOS: "2 years.",
    Android: "3 years.",
    Swift: "2 years.",
    "React Native": "3 years.",
    Flutter: "4 years.",
    Kotli: "2 years.",
  };

  const technologyPractice5 = {
    CVAT: "2 years.",
    DataLoop: "2 years.",
    Plainsight: "3 years.",
  };

  const technologyPractice6 = {
    JMetern: "2 years.",
    Cucumber: "2 years.",
    Cypress: "3 years.",
    Selenium: "2 years.",
    Protractor: "2 years.",
  };

  const technologyprojects = {
    "Scikit-learn": "3+",
    "Open AI": "2+",
    PyTorch: "2+",
    Pandas: "3+",
    "Tensor flow": "4+",
    SciPy: "3+",
    Numpy: "2+",
  };

  const technologyprojects1 = {
    "Elastic Search": "2+",
    Postgres: "5+",
    ".Net Core": "4+",
    Rust: "2+",
    VueJS: "3+",
    Stripe: "5+",
    Jest: "2+",
    Jest: "2+",
    "n8n.io": "3+",
    GraphQL: "4+",
    ExpressJS: "7+",
    Django: "3+",
    MySQL: "5+",
    Flask: "2+",
    NodeJS: "6+",
    Python: "3+",
    Astro: "3+",
    Datahub: "2+",
    Twilio: "2+",
    FabricJS: "3+",
    TypeScript: "4+",
    "Elastic Kibana": "2+",
    Angular: "4+",
    "Elastic Beats": "2+",
    jQuery: "4+",
    NestJS: "8+",
    JavaScript: "8+",
    "SQL Server": "3+",
    ReactJS: "8+",
    MongoDB: "2+",
    Fluentd: "3+",
    Kafka: "2+",
  };

  const technologyprojects2 = {
    Wavefront: "3+",
    Docker: "5+",
    "Github Actions": "2+",
    "Fusion Auth": "2+",
    "Sonar Cloud": "2+",
    GCP: "2+",
    "Microsoft Azure": "3+",
    Jenkins: "2+",
    AWS: "5+",
    Kubernetes: "2+",
    Splunk: "3+",
    Firebase: "2+",
    Heroku: "4+",
    "Digital Ocean": "2+",
    "Azure DevOps": "5+",
  };

  const technologyprojects3 = {
    "Material UI": "7+",
    Balsamiq: "2+",
    "Adobe XD": "3+",
    Bootstrap: "4+",
    TailwindCSS: "3+",
    Figma: "10+",
    CSS3: "4+",
    HTML53: "4+",
    Sass: "5+",
  };

  const technologyprojects4 = {
    iOS: "2+",
    Android: "3+",
    Swift: "2+",
    "React Native": "3+",
    Flutter: "4+",
    Kotli: "2+",
  };

  const technologyprojects5 = {
    CVAT: "2+",
    DataLoop: "3+",
    Plainsight: "2+",
  };

  const technologyprojects6 = {
    JMetern: "2+",
    Cucumber: "2+",
    Cypress: "3+",
    Selenium: "2+",
    Protractor: "2+",
  };

  const technologyWorkforce = {
    "Scikit-learn": "15",
    "Open AI": "15",
    PyTorch: "15",
    Pandas: "15",
    "Tensor flow": "15",
    SciPy: "15",
    Numpy: "15",
  };

  const technologyWorkforce1 = {
    "Elastic Search": "15",
    Postgres: "15",
    ".Net Core": "15",
    Rust: "15",
    VueJS: "15",
    Stripe: "15",
    Jest: "15",
    Jest: "15",
    "n8n.io": "15",
    GraphQL: "15",
    ExpressJS: "15",
    Django: "15",
    MySQL: "15",
    Flask: "15",
    NodeJS: "15",
    Python: "15",
    Astro: "15",
    Datahub: "15",
    Twilio: "15",
    FabricJS: "15",
    TypeScript: "15",
    "Elastic Kibana": "15",
    Angular: "15",
    "Elastic Beats": "15",
    jQuery: "15",
    NestJS: "15",
    JavaScript: "15",
    "SQL Server": "15",
    ReactJS: "15",
    MongoDB: "15",
    Fluentd: "15",
    Kafka: "15",
  };

  const technologyWorkforce2 = {
    Wavefront: "15",
    Docker: "15",
    "Github Actions": "15",
    "Fusion Auth": "15",
    "Sonar Cloud": "15",
    GCP: "15",
    "Microsoft Azure": "15",
    Jenkins: "15",
    AWS: "15",
    Kubernetes: "15",
    Splunk: "15",
    Firebase: "15",
    Heroku: "15",
    "Digital Ocean": "15",
    "Azure DevOps": "15",
  };

  const technologyWorkforce3 = {
    "Material UI": "15",
    Balsamiq: "15",
    "Adobe XD": "15",
    Bootstrap: "15",
    TailwindCSS: "15",
    Figma: "15",
    CSS3: "15",
    HTML53: "15",
    Sass: "15",
  };

  const technologyWorkforce4 = {
    iOS: "15",
    Android: "15",
    Swift: "15",
    "React Native": "15",
    Flutter: "15",
    Kotli: "15",
  };

  const technologyWorkforce5 = {
    CVAT: "15",
    DataLoop: "15",
    Plainsight: "15",
  };

  const technologyWorkforce6 = {
    JMetern: "15",
    Cucumber: "15",
    Cypress: "15",
    Selenium: "15",
    Protractor: "15",
  };

  const technologycontent = {
    "Scikit-learn":
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    "Open AI":
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    PyTorch:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Pandas:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    "Tensor flow":
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    SciPy:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Numpy:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
  };

  const technologycontent1 = {
    "Elastic Search":
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Postgres:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    ".Net Core":
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Rust: "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    VueJS:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Stripe:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Jest: "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Jest: "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    "n8n.io":
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    GraphQL:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    ExpressJS:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Django:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    MySQL:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Flask:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    NodeJS:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Python:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Astro:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Datahub:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Twilio:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    FabricJS:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    TypeScript:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    "Elastic Kibana":
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Angular:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    "Elastic Beats":
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    jQuery:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    NestJS:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    JavaScript:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    "SQL Server":
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    ReactJS:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    MongoDB:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Fluentd:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Kafka:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
  };

  const technologycontent2 = {
    Wavefront:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Docker:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    "Github Actions":
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    "Fusion Auth":
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    "Sonar Cloud":
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    GCP: "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    "Microsoft Azure":
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Jenkins:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    AWS: "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Kubernetes:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Splunk:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Firebase:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Heroku:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    "Digital Ocean":
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    "Azure DevOps":
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
  };

  const technologycontent3 = {
    "Material UI":
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Balsamiq:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Bootstrap:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    TailwindCSS:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Figma:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    CSS3: "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    HTML53:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Sass: "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
  };

  const technologycontent4 = {
    iOS: "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Android:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Swift:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    "React Native":
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Flutter:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Kotli:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
  };

  const technologycontent5 = {
    CVAT: "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    DataLoop:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Plainsight:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
  };

  const technologycontent6 = {
    JMetern:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Cucumber:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Cypress:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Selenium:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
    Protractor:
      "360Xpertsolutions cuts the cost of mobile projects twice by building functional and user-friendly cross-platform apps with React Native.",
  };

  return (
    <>
      <Head>
        <SchemaMarkup
          type="technologies"
          headline="Technologies and Platforms , Full Stack Development, Cloud & DevOps, Artificial Intelligence,UI/UX,Mobile Application Development,Data Annotation,Quality Assurance"
          description="We Work With
      Our developers employ the latest technologies, frameworks, and components to create solutions that combine a strong technical back-end with easy-to-use modern design."
          author="360xpertSolutions"
          tech="Scikit-learn, Open AI, PyTorch, Pandas, Tensor flow, SciPy, Numpy, Elastic Search, Postgres, .Net Core, Rust, VueJS, Stripe,Jest,Jest ,n8n.io,GraphQL, ExpressJS, Django,MySQL,Flask,NodeJS,Python,Astro,Datahub,Twilio,FabricJS,TypeScript,Elastic Kibana ,Angular,jQuery,NestJS,JavaScript ,Elastic Beats ,SQL Server,ReactJS,MongoDB,Fluentd,Kafka,Wavefront,Docker,Github Actions,Fusion Auth,Sonar Cloud,GCP,Microsoft Azure,Jenkins,AWS,Azure DevOps,Digital ocean,Heroku,Firebase,Splunk,Kubernetes,Material UI,Balsamiq,Adobe XD,Bootstrap,TailwindCSS,Figma,CSS3,HTML5,Sass,iOS,Android,Swift,Flutter,Kotlin,CVAT,DataLoop,Plainsight,Cucumber,Cypress,Selenium,Protractor ,JMeter"
        />
      </Head>
      <Grid
        container
        sx={{
          backgroundColor: "#181815",
          marginTop: "20px",
          padding: { xs: "10px", sm: "20px", md: "30px", lg: "40px" },
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              textAlign: { xs: "start", md: "start" },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 600,
                fontFamily: "Clash Display",
                fontSize: { xs: "24px", sm: "32px", md: "40px", lg: "50px" },
                color: "#D0140F",
              }}
            >
              Technologies and Platforms
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 200,
                lineHeight: "29px",
                fontFamily: "Clash Display",
                fontSize: { xs: "28px", sm: "36px", md: "44px", lg: "50px" },
                color: "white",
              }}
            >
              We Work With
            </Typography>
            <Typography
              sx={{
                fontFamily: "Clash Display",
                lineHeight: "24px",
                fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
                color: "white",
              }}
            >
              Our developers employ the latest technologies, frameworks, and
              components to create
            </Typography>
            <Typography
              sx={{
                fontFamily: "Clash Display",
                fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
                color: "white",
              }}
            >
              solutions that combine a strong technical back-end with
              easy-to-use modern design.
            </Typography>
          </Box>

          <Box
            sx={{
              border: "1px solid #808080",
              width: "300",
              borderRadius: "18px",
              marginTop: { xs: "20px", sm: "30px", md: "40px", lg: "50px" },
              padding: { xs: "20px", sm: "40px", md: "80px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "start", md: "start" },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Clash Display",
                  fontSize: { xs: "18px", sm: "22px", md: "26px", lg: "30px" },
                  fontWeight: 500,
                  display: "flex",
                  color: "#fff",
                  justifyContent: { xs: "center", md: "start" },
                  marginBottom: {
                    xs: "20px",
                    sm: "30px",
                    md: "40px",
                    lg: "50px",
                  },
                }}
              >
                Artificial Intelligence
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "start",
                  gap: 1,
                  flexWrap: "wrap",
                }}
              >
                {technologies.map((tech, index) => (
                  <div key={index}>
                    <Button
                      aria-describedby={id}
                      variant="outlined"
                      onClick={(e) => handleClick(e, tech)}
                      startIcon={
                        logoPaths_ROW1[index] ? (
                          <img
                            src={logoPaths_ROW1[index]}
                            alt={`Logo ${index + 1}`}
                            width="20"
                            height="20"
                          />
                        ) : null
                      }
                      sx={{
                        color: "#fff",
                        borderColor: "#3A3A3A",
                        marginBottom: "10px",
                        padding: "15px",
                        fontSize: {
                          xs: "12px",
                          sm: "14px",
                          md: "16px",
                          lg: "18px",
                        },
                        "&:hover": {
                          backgroundColor: "#D0140F",
                        },
                      }}
                    >
                      {tech}
                    </Button>
                    <Popover
                      id={id}
                      open={open && selectedTech === tech}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      sx={{
                        width: "100%", // Make the width 100% for responsiveness
                        maxWidth: "700px", // Set a maximum width for larger screens
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "Technologies_Icon_svg",
                        }}
                      >
                        <Box sx={{ p: 3 }}>
                          <Typography
                            variant="h5"
                            sx={{
                              fontFamily: "Clash Display",
                              fontWeight: 500,
                              fontSize: {
                                xs: "14px",
                                sm: "24px",
                                md: "28px",
                                lg: "32px",
                              },
                              textAlign: "left",
                            }}
                          >
                            Practice
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Clash Display",
                              fontSize: {
                                xs: "14px",
                                sm: "24px",
                                md: "28px",
                                lg: "32px",
                              },
                              fontWeight: 600,
                              lineHeight: "29px",
                              letterSpacing: "0em",
                              textAlign: "left",
                            }}
                          >
                            {technologyPractice[tech]}
                          </Typography>
                        </Box>

                        <Box sx={{ p: 3 }}>
                          <Typography
                            variant="h5"
                            sx={{
                              fontFamily: "Clash Display",
                              fontWeight: 500,
                              fontSize: {
                                xs: "14px",
                                sm: "24px",
                                md: "28px",
                                lg: "32px",
                              },
                            }}
                          >
                            Projects
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Clash Display",
                              fontSize: {
                                xs: "14px",
                                sm: "24px",
                                md: "28px",
                                lg: "32px",
                              },
                              fontWeight: 600,
                              lineHeight: "29px",
                              letterSpacing: "0em",
                              textAlign: "left",
                            }}
                          >
                            {technologyprojects[tech]}
                          </Typography>
                        </Box>

                        <Box sx={{ p: 3 }}>
                          <Typography
                            variant="h5"
                            sx={{
                              fontFamily: "Clash Display",
                              fontWeight: 500,
                              fontSize: {
                                xs: "14px",
                                sm: "24px",
                                md: "28px",
                                lg: "32px",
                              },
                            }}
                          >
                            Workforce
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Clash Display",
                              fontSize: {
                                xs: "14px",
                                sm: "24px",
                                md: "28px",
                                lg: "32px",
                              },
                              fontWeight: 600,
                              lineHeight: "29px",
                              letterSpacing: "0em",
                              textAlign: "left",
                            }}
                          >
                            {technologyWorkforce[tech]}
                          </Typography>
                        </Box>
                      </Box>

                      <Box
                        sx={{ p: 3, textAlign: { xs: "center", sm: "left" } }}
                      >
                        <Typography>{technologycontent[tech]}</Typography>
                      </Box>
                    </Popover>
                  </div>
                ))}
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "start", md: "start" },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Clash Display",
                    fontSize: {
                      xs: "18px",
                      sm: "22px",
                      md: "26px",
                      lg: "30px",
                    },
                    fontWeight: 500,
                    display: "flex",
                    color: "#fff",
                    justifyContent: { xs: "center", md: "start" },
                    marginBottom: {
                      xs: "20px",
                      sm: "30px",
                      md: "40px",
                      lg: "50px",
                    },
                  }}
                >
                  Full Stack Development
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "start",
                    lineHeight: "29px",

                    gap: 2,
                    flexWrap: "wrap",
                  }}
                >
                  {technologies1.map((tech, index) => (
                    <div key={index}>
                      <Button
                        aria-describedby={id}
                        variant="outlined"
                        onClick={(e) => handleClick(e, tech)}
                        startIcon={
                          logoPaths_ROW2[index] ? (
                            <img
                              src={logoPaths_ROW2[index]}
                              alt={`Logo ${index + 1}`}
                              width="20"
                              height="20"
                            />
                          ) : null
                        }
                        sx={{
                          color: "#FFFF",
                          borderColor: "#3A3A3A",
                          padding: "15px",
                          marginBottom: "10px",
                          fontSize: {
                            xs: "12px",
                            sm: "14px",
                            md: "16px",
                            lg: "18px",
                          },
                          "&:hover": {
                            backgroundColor: "#D0140F",
                          },
                        }}
                      >
                        {tech}
                      </Button>
                      <Popover
                        id={id}
                        open={open && selectedTech === tech}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                        sx={{ width: "100%", maxWidth: "700px" }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: { xs: "row", sm: "row" },
                            justifyContent: "space-between",
                          }}
                        >
                          <Box
                            sx={{
                              p: 3,
                              textAlign: { xs: "center", sm: "left" },
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontWeight: 500,
                                fontSize: {
                                  xs: "12px",
                                  sm: "14px",
                                  md: "16px",
                                  lg: "18px",
                                },
                              }}
                            >
                              Practice
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontSize: {
                                  xs: "13px",
                                  sm: "24px",
                                  md: "28px",
                                  lg: "32px",
                                },
                                fontWeight: 600,
                                lineHeight: "29px",
                                letterSpacing: "0em",
                                textAlign: "left",
                              }}
                            >
                              {technologyPractice1[tech]}
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              p: 3,
                              textAlign: { xs: "center", sm: "left" },
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontWeight: 500,
                                fontSize: {
                                  xs: "12px",
                                  sm: "14px",
                                  md: "16px",
                                  lg: "18px",
                                },
                              }}
                            >
                              Projects
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontSize: {
                                  xs: "14px",
                                  sm: "24px",
                                  md: "28px",
                                  lg: "32px",
                                },
                                fontWeight: 600,
                                lineHeight: "29px",
                                letterSpacing: "0em",
                                textAlign: "left",
                              }}
                            >
                              {technologyprojects1[tech]}
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              p: 3,
                              textAlign: { xs: "center", sm: "left" },
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontWeight: 500,
                                fontSize: {
                                  xs: "12px",
                                  sm: "14px",
                                  md: "16px",
                                  lg: "18px",
                                },
                              }}
                            >
                              Workforce
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontSize: {
                                  xs: "14px",
                                  sm: "24px",
                                  md: "28px",
                                  lg: "32px",
                                },
                                fontWeight: 600,
                                lineHeight: "29px",
                                letterSpacing: "0em",
                                textAlign: "left",
                              }}
                            >
                              {technologyWorkforce1[tech]}
                            </Typography>
                          </Box>
                        </Box>

                        <Box
                          sx={{ p: 3, textAlign: { xs: "center", sm: "left" } }}
                        >
                          <Typography
                            sx={{
                              lineHeight: "29px",
                            }}
                          >
                            {technologycontent1[tech]}
                          </Typography>
                        </Box>
                      </Popover>
                    </div>
                  ))}
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "start", md: "start" },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Clash Display",
                    fontSize: {
                      xs: "18px",
                      sm: "22px",
                      md: "26px",
                      lg: "30px",
                    },
                    fontWeight: 500,
                    display: "flex",
                    color: "#fff",
                    justifyContent: { xs: "center", md: "start" },
                    marginBottom: {
                      xs: "20px",
                      sm: "30px",
                      md: "40px",
                      lg: "50px",
                    },
                  }}
                >
                  Cloud & DevOps
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "start",
                    gap: 2,
                    flexWrap: "wrap",
                  }}
                >
                  {technologies2.map((tech, index) => (
                    <div key={index}>
                      <Button
                        aria-describedby={id}
                        variant="outlined"
                        onClick={(e) => handleClick(e, tech)}
                        startIcon={
                          logoPaths_ROW3[index] ? (
                            <img
                              src={logoPaths_ROW3[index]}
                              alt={`Logo ${index + 1}`}
                              width="20"
                              height="20"
                            />
                          ) : null
                        }
                        sx={{
                          color: "#FFFF",
                          borderColor: "#3A3A3A",
                          padding: "15px",
                          marginBottom: "10px",
                          fontSize: {
                            xs: "12px",
                            sm: "14px",
                            md: "16px",
                            lg: "18px",
                          },
                          "&:hover": {
                            backgroundColor: "#D0140F",
                          },
                        }}
                      >
                        {tech}
                      </Button>
                      <Popover
                        id={id}
                        open={open && selectedTech === tech}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                        sx={{ width: "100%", maxWidth: "700px" }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: { xs: "row", sm: "row" },
                            justifyContent: "space-between",
                          }}
                        >
                          <Box
                            sx={{
                              p: 3,
                              textAlign: { xs: "center", sm: "left" },
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontWeight: 500,
                                lineHeight: "29px",
                                fontSize: {
                                  xs: "10px",
                                  sm: "12px",
                                  md: "14px",
                                  lg: "18px",
                                },
                              }}
                            >
                              Practice
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontSize: {
                                  xs: "13px",
                                  sm: "24px",
                                  md: "28px",
                                  lg: "32px",
                                },
                                fontWeight: 600,
                                lineHeight: "29px",
                                letterSpacing: "0em",
                                textAlign: "left",
                              }}
                            >
                              {technologyPractice2[tech]}
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              p: 3,
                              textAlign: { xs: "center", sm: "left" },
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontWeight: 500,
                                fontSize: {
                                  xs: "12px",
                                  sm: "14px",
                                  md: "16px",
                                  lg: "18px",
                                },
                              }}
                            >
                              Projects
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontSize: {
                                  xs: "14px",
                                  sm: "24px",
                                  md: "28px",
                                  lg: "32px",
                                },
                                fontWeight: 600,
                                lineHeight: "29px",
                                letterSpacing: "0em",
                                textAlign: "left",
                              }}
                            >
                              {technologyprojects2[tech]}
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontSize: {
                                  xs: "14px",
                                  sm: "24px",
                                  md: "28px",
                                  lg: "32px",
                                },
                                fontWeight: 600,
                                lineHeight: "29px",
                                letterSpacing: "0em",
                                textAlign: "left",
                              }}
                            >
                              {technologyprojects[tech]}
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              p: 3,
                              textAlign: { xs: "center", sm: "left" },
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontWeight: 500,
                                fontSize: {
                                  xs: "12px",
                                  sm: "14px",
                                  md: "16px",
                                  lg: "18px",
                                },
                              }}
                            >
                              Workforce
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontSize: {
                                  xs: "14px",
                                  sm: "24px",
                                  md: "28px",
                                  lg: "32px",
                                },
                                fontWeight: 600,
                                lineHeight: "29px",
                                letterSpacing: "0em",
                                textAlign: "left",
                              }}
                            >
                              {technologyWorkforce2[tech]}
                            </Typography>
                          </Box>
                        </Box>

                        <Box
                          sx={{ p: 3, textAlign: { xs: "center", sm: "left" } }}
                        >
                          <Typography
                            sx={{
                              lineHeight: "29px",
                            }}
                          >
                            {technologycontent2[tech]}
                          </Typography>
                        </Box>
                      </Popover>
                    </div>
                  ))}
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "start", md: "start" },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Clash Display",
                    fontSize: {
                      xs: "18px",
                      sm: "22px",
                      md: "26px",
                      lg: "30px",
                    },
                    fontWeight: 500,
                    display: "flex",
                    color: "#fff",

                    justifyContent: { xs: "center", md: "start" },
                    marginBottom: {
                      xs: "20px",
                      sm: "30px",
                      md: "40px",
                      lg: "50px",
                    },
                  }}
                >
                  UI/UX
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "start",
                    gap: 2,
                    flexWrap: "wrap",
                  }}
                >
                  {technologies3.map((tech, index) => (
                    <div key={index}>
                      <Button
                        aria-describedby={id}
                        variant="outlined"
                        onClick={(e) => handleClick(e, tech)}
                        startIcon={
                          logoPaths_ROW4[index] ? (
                            <img
                              src={logoPaths_ROW4[index]}
                              alt={`Logo ${index + 1}`}
                              width="20"
                              height="20"
                            />
                          ) : null
                        }
                        sx={{
                          color: "#FFF",
                          borderColor: "#3A3A3A",
                          padding: "15px",
                          marginBottom: "10px",
                          fontSize: {
                            xs: "12px",
                            sm: "14px",
                            md: "16px",
                            lg: "18px",
                          },
                          "&:hover": {
                            backgroundColor: "#D0140F",
                          },
                        }}
                      >
                        {tech}
                      </Button>
                      <Popover
                        id={id}
                        open={open && selectedTech === tech}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                        sx={{ width: "100%", maxWidth: "700px" }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: { xs: "row", sm: "row" },
                            justifyContent: "space-between",
                          }}
                        >
                          <Box
                            sx={{
                              p: 3,
                              textAlign: { xs: "center", sm: "left" },
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontWeight: 500,
                                fontSize: {
                                  xs: "10px",
                                  sm: "12px",
                                  md: "14px",
                                  lg: "18px",
                                },
                              }}
                            >
                              Practice
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontSize: {
                                  xs: "13px",
                                  sm: "24px",
                                  md: "28px",
                                  lg: "32px",
                                },
                                fontWeight: 600,
                                lineHeight: "29px",
                                letterSpacing: "0em",
                                textAlign: "left",
                              }}
                            >
                              {technologyPractice3[tech]}
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              p: 3,
                              textAlign: { xs: "center", sm: "left" },
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontWeight: 500,
                                fontSize: {
                                  xs: "12px",
                                  sm: "14px",
                                  md: "16px",
                                  lg: "18px",
                                },
                              }}
                            >
                              Projects
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontSize: {
                                  xs: "14px",
                                  sm: "24px",
                                  md: "28px",
                                  lg: "32px",
                                },
                                fontWeight: 600,
                                lineHeight: "29px",
                                letterSpacing: "0em",
                                textAlign: "left",
                              }}
                            >
                              {technologyprojects3[tech]}
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              p: 3,
                              textAlign: { xs: "center", sm: "left" },
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontWeight: 500,
                                fontSize: {
                                  xs: "12px",
                                  sm: "14px",
                                  md: "16px",
                                  lg: "18px",
                                },
                              }}
                            >
                              Workforce
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontSize: {
                                  xs: "14px",
                                  sm: "24px",
                                  md: "28px",
                                  lg: "32px",
                                },
                                fontWeight: 600,
                                lineHeight: "29px",
                                letterSpacing: "0em",
                                textAlign: "left",
                              }}
                            >
                              {technologyWorkforce3[tech]}
                            </Typography>
                          </Box>
                        </Box>

                        <Box
                          sx={{ p: 3, textAlign: { xs: "center", sm: "left" } }}
                        >
                          <Typography
                            sx={{
                              lineHeight: "29px",
                            }}
                          >
                            {technologycontent3[tech]}
                          </Typography>
                        </Box>
                      </Popover>
                    </div>
                  ))}
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "start", md: "start" },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Clash Display",
                    fontSize: {
                      xs: "18px",
                      sm: "22px",
                      md: "26px",
                      lg: "30px",
                    },
                    fontWeight: 500,
                    display: "flex",
                    color: "#fff",
                    justifyContent: { xs: "center", md: "start" },
                    marginBottom: {
                      xs: "20px",
                      sm: "30px",
                      md: "40px",
                      lg: "50px",
                    },
                  }}
                >
                  Mobile Application Development
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "start",
                    gap: 2,
                    flexWrap: "wrap",
                  }}
                >
                  {technologies4.map((tech, index) => (
                    <div key={index}>
                      <Button
                        aria-describedby={id}
                        variant="outlined"
                        onClick={(e) => handleClick(e, tech)}
                        startIcon={
                          logoPaths_ROW5[index] ? (
                            <img
                              src={logoPaths_ROW5[index]}
                              alt={`Logo ${index + 1}`}
                              width="20"
                              height="20"
                            />
                          ) : null
                        }
                        sx={{
                          color: "#FFF",
                          padding: "15px",
                          borderColor: "#3A3A3A",
                          marginBottom: "10px",
                          fontSize: {
                            xs: "12px",
                            sm: "14px",
                            md: "16px",
                            lg: "18px",
                          },

                          "&:hover": {
                            backgroundColor: "#D0140F",
                          },
                        }}
                      >
                        {tech}
                      </Button>
                      <Popover
                        id={id}
                        open={open && selectedTech === tech}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                        sx={{ width: "100%", maxWidth: "700px" }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: { xs: "row", sm: "row" },
                            justifyContent: "space-between",
                          }}
                        >
                          <Box
                            sx={{
                              p: 3,
                              textAlign: { xs: "center", sm: "left" },
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontWeight: 500,
                                fontSize: {
                                  xs: "10px",
                                  sm: "12px",
                                  md: "14px",
                                  lg: "18px",
                                },
                              }}
                            >
                              Practice
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontSize: {
                                  xs: "13px",
                                  sm: "24px",
                                  md: "28px",
                                  lg: "32px",
                                },
                                fontWeight: 600,
                                lineHeight: "29px",
                                letterSpacing: "0em",
                                textAlign: "left",
                              }}
                            >
                              {technologyPractice4[tech]}
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              p: 3,
                              textAlign: { xs: "center", sm: "left" },
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontWeight: 500,
                                fontSize: {
                                  xs: "12px",
                                  sm: "14px",
                                  md: "16px",
                                  lg: "18px",
                                },
                              }}
                            >
                              Projects
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontSize: {
                                  xs: "14px",
                                  sm: "24px",
                                  md: "28px",
                                  lg: "32px",
                                },
                                fontWeight: 600,
                                lineHeight: "29px",
                                letterSpacing: "0em",
                                textAlign: "left",
                              }}
                            >
                              {technologyprojects4[tech]}
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              p: 3,
                              textAlign: { xs: "center", sm: "left" },
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontWeight: 500,
                                fontSize: {
                                  xs: "12px",
                                  sm: "14px",
                                  md: "16px",
                                  lg: "18px",
                                },
                              }}
                            >
                              Workforce
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontSize: {
                                  xs: "14px",
                                  sm: "24px",
                                  md: "28px",
                                  lg: "32px",
                                },
                                fontWeight: 600,
                                lineHeight: "29px",
                                letterSpacing: "0em",
                                textAlign: "left",
                              }}
                            >
                              {technologyWorkforce4[tech]}
                            </Typography>
                          </Box>
                        </Box>

                        <Box
                          sx={{ p: 3, textAlign: { xs: "center", sm: "left" } }}
                        >
                          <Typography
                            sx={{
                              lineHeight: "29px",
                            }}
                          >
                            {technologycontent4[tech]}
                          </Typography>
                        </Box>
                      </Popover>
                    </div>
                  ))}
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "start", md: "start" },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Clash Display",
                    fontSize: {
                      xs: "18px",
                      sm: "22px",
                      md: "26px",
                      lg: "30px",
                    },
                    fontWeight: 500,
                    display: "flex",
                    color: "#fff",
                    justifyContent: { xs: "center", md: "start" },
                    marginBottom: {
                      xs: "20px",
                      sm: "30px",
                      md: "40px",
                      lg: "50px",
                    },
                  }}
                >
                  Data Annotation
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "start",
                    gap: 2,
                    flexWrap: "wrap",
                  }}
                >
                  {technologies5.map((tech, index) => (
                    <div key={index}>
                      <Button
                        aria-describedby={id}
                        variant="outlined"
                        onClick={(e) => handleClick(e, tech)}
                        startIcon={
                          logoPaths_ROW6[index] ? (
                            <img
                              src={logoPaths_ROW6[index]}
                              alt={`Logo ${index + 1}`}
                              width="20"
                              height="20"
                            />
                          ) : null
                        }
                        sx={{
                          color: "#FFF",
                          borderColor: "#3A3A3A",
                          padding: "15px",
                          marginBottom: "10px",
                          fontSize: {
                            xs: "12px",
                            sm: "14px",
                            md: "16px",
                            lg: "18px",
                          },
                          "&:hover": {
                            backgroundColor: "#D0140F",
                          },
                        }}
                      >
                        {tech}
                      </Button>
                      <Popover
                        id={id}
                        open={open && selectedTech === tech}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                        sx={{ width: "100%", maxWidth: "700px" }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: { xs: "row", sm: "row" },
                            justifyContent: "space-between",
                          }}
                        >
                          <Box
                            sx={{
                              p: 3,
                              textAlign: { xs: "center", sm: "left" },
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontWeight: 500,
                                fontSize: {
                                  xs: "10px",
                                  sm: "12px",
                                  md: "14px",
                                  lg: "18px",
                                },
                              }}
                            >
                              Practice
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontSize: {
                                  xs: "13px",
                                  sm: "24px",
                                  md: "28px",
                                  lg: "32px",
                                },
                                fontWeight: 600,
                                lineHeight: "29px",
                                letterSpacing: "0em",
                                textAlign: "left",
                              }}
                            >
                              {technologyPractice5[tech]}
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              p: 3,
                              textAlign: { xs: "center", sm: "left" },
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontWeight: 500,
                                fontSize: {
                                  xs: "12px",
                                  sm: "14px",
                                  md: "16px",
                                  lg: "18px",
                                },
                              }}
                            >
                              Projects
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontSize: {
                                  xs: "14px",
                                  sm: "24px",
                                  md: "28px",
                                  lg: "32px",
                                },
                                fontWeight: 600,
                                lineHeight: "29px",
                                letterSpacing: "0em",
                                textAlign: "left",
                              }}
                            >
                              {technologyprojects5[tech]}
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              p: 3,
                              textAlign: { xs: "center", sm: "left" },
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontWeight: 500,
                                fontSize: {
                                  xs: "12px",
                                  sm: "14px",
                                  md: "16px",
                                  lg: "18px",
                                },
                              }}
                            >
                              Workforce
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontSize: {
                                  xs: "14px",
                                  sm: "24px",
                                  md: "28px",
                                  lg: "32px",
                                },
                                fontWeight: 600,
                                lineHeight: "29px",
                                letterSpacing: "0em",
                                textAlign: "left",
                              }}
                            >
                              {technologyWorkforce5[tech]}
                            </Typography>
                          </Box>
                        </Box>

                        <Box
                          sx={{ p: 3, textAlign: { xs: "center", sm: "left" } }}
                        >
                          <Typography
                            sx={{
                              lineHeight: "29px",
                            }}
                          >
                            {technologycontent5[tech]}
                          </Typography>
                        </Box>
                      </Popover>
                    </div>
                  ))}
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "start", md: "start" },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Clash Display",
                    fontSize: {
                      xs: "18px",
                      sm: "22px",
                      md: "26px",
                      lg: "30px",
                    },
                    fontWeight: 500,
                    display: "flex",
                    color: "#fff",
                    justifyContent: { xs: "center", md: "start" },
                    marginBottom: {
                      xs: "20px",
                      sm: "30px",
                      md: "40px",
                      lg: "50px",
                    },
                  }}
                >
                  Quality Assurance
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "start",
                    gap: 2,
                    flexWrap: "wrap",
                  }}
                >
                  {technologies6.map((tech, index) => (
                    <div key={index}>
                      <Button
                        aria-describedby={id}
                        variant="outlined"
                        onClick={(e) => handleClick(e, tech)}
                        startIcon={
                          logoPaths_ROW7[index] ? (
                            <img
                              src={logoPaths_ROW7[index]}
                              alt={`Logo ${index + 1}`}
                              width="20"
                              height="20"
                            />
                          ) : null
                        }
                        sx={{
                          color: "#FFF",
                          borderColor: "#3A3A3A",
                          padding: "15px",
                          marginBottom: "10px",
                          fontSize: {
                            xs: "12px",
                            sm: "14px",
                            md: "16px",
                            lg: "18px",
                          },
                          "&:hover": {
                            backgroundColor: "#D0140F",
                          },
                        }}
                      >
                        {tech}
                      </Button>
                      <Popover
                        id={id}
                        open={open && selectedTech === tech}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                        sx={{ width: "100%", maxWidth: "700px" }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            justifyContent: "space-between",
                          }}
                        >
                          <Box
                            sx={{
                              p: 3,
                              textAlign: { xs: "center", sm: "left" },
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontWeight: 500,
                                fontSize: {
                                  xs: "10px",
                                  sm: "12px",
                                  md: "14px",
                                  lg: "18px",
                                },
                              }}
                            >
                              Practice
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontSize: {
                                  xs: "13px",
                                  sm: "24px",
                                  md: "28px",
                                  lg: "32px",
                                },
                                fontWeight: 600,
                                lineHeight: "29px",
                                letterSpacing: "0em",
                                textAlign: "left",
                              }}
                            >
                              {technologyPractice6[tech]}
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              p: 3,
                              textAlign: { xs: "center", sm: "left" },
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontWeight: 500,
                                fontSize: {
                                  xs: "12px",
                                  sm: "14px",
                                  md: "16px",
                                  lg: "18px",
                                },
                              }}
                            >
                              Projects
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontSize: {
                                  xs: "14px",
                                  sm: "24px",
                                  md: "28px",
                                  lg: "32px",
                                },
                                fontWeight: 600,
                                lineHeight: "29px",
                                letterSpacing: "0em",
                                textAlign: "left",
                              }}
                            >
                              {technologyprojects6[tech]}
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              p: 3,
                              textAlign: { xs: "center", sm: "left" },
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontWeight: 500,
                                fontSize: {
                                  xs: "12px",
                                  sm: "14px",
                                  md: "16px",
                                  lg: "18px",
                                },
                              }}
                            >
                              Workforce
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "Clash Display",
                                fontSize: {
                                  xs: "14px",
                                  sm: "24px",
                                  md: "28px",
                                  lg: "32px",
                                },
                                fontWeight: 600,
                                lineHeight: "29px",
                                letterSpacing: "0em",
                                textAlign: "left",
                              }}
                            >
                              {technologyWorkforce6[tech]}
                            </Typography>
                          </Box>
                        </Box>

                        <Box
                          sx={{ p: 3, textAlign: { xs: "center", sm: "left" } }}
                        >
                          <Typography
                            sx={{
                              lineHeight: "29px",
                            }}
                          >
                            {technologycontent6[tech]}
                          </Typography>
                        </Box>
                      </Popover>
                    </div>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Grid>
    </>
  );
}
