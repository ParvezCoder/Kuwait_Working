import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Image from 'next/image';

// Import icons
import cnIconPHP from '/public/images/icons/icon_php.svg';
import cnIconJavaScript from '/public/images/icons/icon_javascript.svg';
import cnIconPostgreSQL from '/public/images/case/icon_elephent.svg'; // Assuming icon_elephent.svg is for PostgreSQL
import cnIconSwift from '/public/images/icons/icon_swift.svg';
import cnIconTypeScript from '/public/images/icons/icon_typescript.svg';
import cnIconPython from '/public/images/icons/icon_python.svg';
import cnIconG318 from '/public/images/icons/icon_g318.svg';
import cnIconJava from '/public/images/icons/icon_java.svg';
import cnIconRuby from '/public/images/icons/icon_ruby.svg';
import cnIconCPlus from '/public/images/icons/icon_c_plus.svg';
import cnIconReactJs from '/public/images/icons/icon_react_js.svg';
import cnIconLaravel from '/public/images/icons/icon_laravel.svg';
import cnIconAWS from '/public/images/icons/icon_aws.svg'; // Placeholder, replace with actual icon if available
// import cnIconDocker from '/public/images/icons/icon_docker.svg'; // Placeholder, replace with actual icon if available
// import cnIconKubernetes from '/public/images/icons/icon_kubernetes.svg'; // Placeholder, replace with actual icon if available
import cnIconFlutter from '/public/images/icons/icon_flutter.svg'; // Placeholder, replace with actual icon if available
import cnIconReactNative from '/public/images/icons/icon_native.svg'; // Placeholder, replace with actual icon if available
import cnIconMsSql from '/public/images/icons/icon_mssql.svg';
import cnIconNetCore from '/public/images/icons/icon_netcore.svg'; // Placeholder, replace with actual icon if available
import cnIconEntity from '/public/images/icons/icon_entity.png'; // Placeholder, replace with actual icon if available
import cnIconrdb from '/public/images/icons/icon_rdb.svg'; // Placeholder, replace with actual icon if available
import cnIconkeentheme from '/public/images/icons/icon_keentheme.svg'; // Placeholder, replace with actual icon if available
import cnIconprisma from '/public/images/icons/icon_prisma.svg'; // Placeholder, replace with actual icon if available
import cnIconMongoDB from '/public/images/icons/icon_mongodb.svg'; // Placeholder, replace with actual icon if available
import cnIconMySQL from '/public/images/icons/icon_mysql.svg'; // Placeholder, replace with actual icon if available
import iconGitHub from '/public/images/icons/icon_github.png';
import iconAzure from '/public/images/icons/icon_azure.jpg';
import iconNuGet from '/public/images/icons/icon_nuget.jpg';
import iconOracle from '/public/images/icons/icon_oracle.png';
import iconIBMZ from '/public/images/icons/icon_ibmz.svg';
import iconIBMCloud from '/public/images/icons/icon_ibmcloud.jpg';
import iconGitLab from '/public/images/icons/icon_gitlab.jpeg';
import iconHeroku from '/public/images/icons/icon_heroku.jpg';
import iconAnsible from '/public/images/icons/icon_ansible.jpg';
import iconNGINX from '/public/images/icons/icon_nginx.jpg';
import iconF5 from '/public/images/icons/icon_f5.jpg';
import iconRakuten from '/public/images/icons/icon_rakuten.png';
import iconTanzu from '/public/images/icons/icon_tanzu.jpg';
import iconDocker from '/public/images/icons/icon_docker.jpg';
import iconDX from '/public/images/icons/icon_dx.png';
import iconOpsGenie from '/public/images/icons/icon_opsgenie.jpg';
import iconBitbucket from '/public/images/icons/icon_bitbucket.jpg';
import iconTrendMicro from '/public/images/icons/icon_trend.jpg';
import iconOpenDevOps from '/public/images/icons/icon_opendevops.jpg';
import iconBroadcom from '/public/images/icons/icon_broadcom.jpg';



const Technologies = {
  'Web Platform': [
    { Id: '1', sIcon: cnIconNetCore, title: '.NET Core' },
    { Id: '2', sIcon: cnIconJavaScript, title: 'JavaScript' },
    { Id: '3', sIcon: cnIconTypeScript, title: 'TypeScript' },
    { Id: '4', sIcon: cnIconReactJs, title: 'React Js' },
    { Id: '5', sIcon: cnIconLaravel, title: 'Laravel' },
    { Id: '6', sIcon: cnIconPython, title: 'Python' },
    { Id: '7', sIcon: cnIconRuby, title: 'Ruby' },
    { Id: '8', sIcon: cnIconJava, title: 'Java' },
    { Id: '9', sIcon: cnIconCPlus, title: 'C++' },
    { Id: '10', sIcon: cnIconPHP, title: 'PHP' }, // Assuming icon_dotnetcore.svg is for .NET Core

  ],
  'Databases': [
    { Id: '1', sIcon: cnIconPostgreSQL, title: 'PostgreSQL' },
    { Id: '2', sIcon: cnIconMsSql, title: 'MSSQL Server' }, // Assuming icon_mssql.svg is for MS SQL
    { Id: '3', sIcon: cnIconMongoDB, title: 'MongoDB' }, // Assuming icon_mongodb.svg is for MongoDB
    { Id: '4', sIcon: cnIconMySQL, title: 'MySQL' }, // Uncomment if you have a MySQL icon
    // Add other database icons here if you have them, e.g., MySQL, MongoDB
  ],
'Cloud & DevOps': [
  { Id: '1', sIcon: cnIconAWS, title: 'AWS' },
  { Id: '2', sIcon: iconGitHub, title: 'GitHub' },
  { Id: '3', sIcon: iconAzure, title: 'Azure DevOps' },
  { Id: '4', sIcon: iconNuGet, title: 'NuGet' },
  { Id: '5', sIcon: iconOracle, title: 'Oracle Cloud' },
  { Id: '6', sIcon: iconIBMZ, title: 'IBM Z' },
  { Id: '7', sIcon: iconIBMCloud, title: 'IBM Cloud' },
  { Id: '8', sIcon: iconGitLab, title: 'GitLab' },
  { Id: '9', sIcon: iconHeroku, title: 'Heroku' },
  { Id: '10', sIcon: iconAnsible, title: 'Ansible' },
  { Id: '11', sIcon: iconNGINX, title: 'NGINX ingress' },
  { Id: '12', sIcon: iconF5, title: 'F5 WAF' },
  { Id: '13', sIcon: iconRakuten, title: 'Rakuten SixthSense' },
  { Id: '14', sIcon: iconTanzu, title: 'VMware Tanzu' },
  { Id: '15', sIcon: iconDocker, title: 'Docker' },
  { Id: '16', sIcon: iconDX, title: 'DX APM' },
  { Id: '17', sIcon: iconOpsGenie, title: 'OpsGenie' },
  { Id: '18', sIcon: iconBitbucket, title: 'Bitbucket' },
  { Id: '19', sIcon: iconTrendMicro, title: 'Trend Micro Cloud One' },
  { Id: '20', sIcon: iconOpenDevOps, title: 'Open DevOps' },
  { Id: '21', sIcon: iconBroadcom, title: 'Broadcom' },
  { Id: '22', sIcon: iconNGINX, title: 'NGINX controller' },
  { Id: '23', sIcon: iconDX, title: 'Enterprise Automation' },
],

  'Mobile Apps': [
    { Id: '1', sIcon: cnIconFlutter, title: 'Flutter' }, // Example for Flutter
    { Id: '2', sIcon: cnIconReactNative, title: 'React Native' }, // Example for React Native
    { Id: '3', sIcon: cnIconSwift, title: 'Swift' },
    { Id: '4', sIcon: cnIconJava, title: 'Java (Android)' }, // Java for Android development
    { Id: '5', sIcon: cnIconCPlus, title: 'C++ (Cross-platform)' }, // C++ for cross-platform mobile development
  ],
  'Other Frameworks': [
    { Id: '1', sIcon: cnIconG318, title: 'G318' }, // Assuming G318 is an "other" framework
    { Id: '2', sIcon: cnIconEntity, title: 'Entity Framework' }, // Assuming G318 is an "other" framework
    { Id: '3', sIcon: cnIconkeentheme, title: 'Keen Theme' }, // Assuming G318 is an "other" framework
    { Id: '4', sIcon: cnIconrdb, title: 'RxDB' }, // Assuming G318 is an "other" framework
    { Id: '5', sIcon: cnIconprisma, title: 'Prisma' },// Assuming G318 is an "other" framework
  ],
};

const TechnologySection = (props) => {
  const [activeTab, setActiveTab] = useState('Web Platform'); // Set initial active tab to a category name

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="section_space">
      <div className="heading_block text-center">
        <div className="heading_focus_text has_underline d-inline-flex" style={{ backgroundImage: `url(${'/images/shapes/shape_title_under_line.svg'})` }}>
          Our Technologies
        </div>
        <h2 className="heading_text mb-0">
          We Use <mark>Technologies</mark>
        </h2>
      </div>

      <div className="tab_block_wrapper">
        <Nav tabs className="nav justify-content-center">
          {Object.keys(Technologies).map((categoryName) => (
            <NavItem key={categoryName}>
              <NavLink
                className={classnames({ active: activeTab === categoryName })}
                onClick={() => { toggle(categoryName); }}
              >
                {categoryName}
              </NavLink>
            </NavItem>
          ))}
        </Nav>

        <TabContent activeTab={activeTab}>
          {Object.keys(Technologies).map((categoryName) => (
            <TabPane tabId={categoryName} key={categoryName}>
              <div className="web_development_technologies row justify-content-center">
                {Technologies[categoryName].map((technology, cnt) => (
                  <div className="col-lg-2 col-md-3 col-sm-4 col-6" key={cnt}>
                    <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                      <div className="iconbox_icon">
                        <Image src={technology.sIcon} alt={technology.title} />
                      </div>
                      <div className="iconbox_content">
                        <h3 className="iconbox_title mb-0">{technology.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPane>
          ))}
        </TabContent>
      </div>
    </div>
  );
};

export default TechnologySection;