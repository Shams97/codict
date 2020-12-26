/**
 * return array of icon names with ful details like size and other meta data
 */
export const generateLangIcons = () => {
  const raw = [
    { name: ["fab", "java"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "js"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "node-js"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "joomla"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "css3-alt"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "python"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "html5"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "php"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "swift"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "rust"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "joomla"], width: 30, height: 30, isIcon: true },
    { name: ["None"], isIcon: false },
    { name: ["All"], isIcon: false },
  ];

  return raw;
};

/**
 * return raw array of icon names without the 'none' and 'all' values
 *  */
export const rawLangIcons = () => {
  const temp = [...generateLangIcons()];
  const end = generateLangIcons().length - 2;
  return temp.slice(0, end).map((icon) => {
    if (icon.name[1] === undefined) return icon.name[0];
    return icon.name[1];
  });
};

export const generateframeWorksIcons = () => {
  const raw = [
    { name: ["fab", "react"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "angular"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "jenkins"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "sass"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "magento"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "laravel"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "bootstrap"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "wordpress-simple"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "less"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "gulp"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "grunt"], width: 30, height: 30, isIcon: true },
    { name: ["fab", "laravel"], width: 30, height: 30, isIcon: true },
    { name: ["None"], isIcon: false },
    { name: ["All"], isIcon: false },
  ];
  return raw;
};

export const rawFramwIcons = () => {
  const temp = [...generateframeWorksIcons()];
  const end = generateframeWorksIcons().length - 2;
  return temp.slice(0, end).map((icon) => {
    if (icon.name[1] === undefined) return icon.name[0];
    return icon.name[1];
  });
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
    { name: ["None"], isIcon: false },
    { name: ["All"], isIcon: false },
  ];

  return raw;
};

export const rawOsIcons = () => {
  const temp = [...generateOSicons()];
  const end = generateOSicons().length - 2;
  return temp.slice(0, end).map((icon) => {
    if (icon.name[1] === undefined) return icon.name[0];
    return icon.name[1];
  });
};

export const generatePrinciples = () => {
  const raw = [
    { name: "Sofware Development", isIcon: false },
    { name: ["None"], isIcon: false },
    { name: ["All"], isIcon: false },
  ];

  return raw;
};
export const rawPrinciplesIcons = () => {
  const temp = [...generatePrinciples()];
  const end = generatePrinciples().length - 2;
  return temp.slice(0, end).map((icon) => {
    if (icon.name[1] === undefined) return icon.name[0];
    return icon.name[1];
  });
};
