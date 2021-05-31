
import fs from 'fs';

const getCustomEnv = (mode) => {
  const fileStr = fs.readFileSync(`.env.${mode}`, 'utf8');
  const customEnv = {};
  fileStr.replace(/\s*(VITE_\S*)\s*/g, (m, $1) => {
    const valStr = $1.trim();
    const idxOfEquition = valStr.indexOf('=');
    const key = valStr.slice(0, idxOfEquition);
    const value = valStr.slice(idxOfEquition+1);
    customEnv[key] = value;
    return m
  })
  return customEnv
}

const htmlPlugin = (mode) => {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      const customEnv = getCustomEnv(mode);
      // console.log(customEnv)
      return html.replace(
        /<%=\s(VITE_.*)\s%>/,
        (m, $1) => {
          return customEnv[$1];
        }
      )
    }
  }
}

export default htmlPlugin
