/**
 * return array of icon names with ful details like size and other meta data
 */
export const generateLangIcons = () => {
  const raw = [
    { name: ["fab", "java"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "js"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "node-js"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "css3-alt"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "python"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "html5"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "php"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "swift"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "rust"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "joomla"], width: 30, height: 30, isIcon: true },
  ];

  return raw;
};

export const langIconsNames = () => {
  return generateLangIcons().map((i) => i.name[1]);
};

export const generateframeWorksIcons = () => {
  const raw = [
    { name: ["fab", "react"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "angular"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "jenkins"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "sass"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "magento"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "bootstrap"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "wordpress-simple"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "less"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "gulp"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "grunt"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "laravel"], width: 30, height: 30, isIcon: true },
  ];
  return raw;
};

export const frameWorksIconsNames = () => {
  return generateframeWorksIcons().map((i) => i.name[1]);
};
export const generateOSicons = () => {
  const raw = [
    { name: ["fab", "linux"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "windows"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "centos"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "suse"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "redhat"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "fedora"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "ubuntu"], width: 30, height: 30, isIcon: true },
  ];

  return raw;
};

export const osIconsNames = () => {
  return generateOSicons().map((i) => i.name[1]);
};

export const generatePrinciples = () => {
  const raw = [
    { name: ["Sofware Development"], isIcon: false },
    { name: ["Web Development"], isIcon: false },
    { name: ["Frontend Development"], isIcon: false },
    { name: ["Backend Development"], isIcon: false },
    { name: ["DevOps Development"], isIcon: false },
  ];

  return raw;
};

export const principlesIconsNames = () => {
  return generatePrinciples().map((i) => i.name[0]);
};
