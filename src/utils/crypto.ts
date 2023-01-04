/*
 * @Description: 加密
 * @Author: yeke
 * @Date: 2023-01-04 22:17:06
 * @LastEditors: yeke
 * @LastEditTime: 2023-01-04 22:45:52
 */
import CryptoJS from "crypto-js";
// AES 高级加密标准，是下一代的加密算法标准，速度快，安全级别高
// DES 数据加密标准，适用于大量数据加密
// TripleDES 是DES的增强版
// RC4 流加密算法，密钥长度可变
// HmacSHA1 键控哈希算法（密钥与消息数据混合）
// encrypt加密 / decrypt解密
// srcs 加密的字符串
// key 密钥 值得注意的是密钥的长度，对称加密算法AES-128-CBC算法，数据采用 PKCS#7 填充 ， 因此这里的 key 需要为16位！
// iv 密钥偏移量

// mode 加密模式 【CBC ECB CFB OFB CTRGladman(CTR)】
// paddig 填充方式 【 NoPadding ZeroPadding Pkcs7(Pkcs5) Iso10126 Iso97971 AnsiX923
// srcs值 有四种方法
// let srcs = CryptoJS.enc.Utf8.parse(utf8String)
// let srcs = CryptoJS.enc.Latin1.parse(latin1String)
// let srcs = CryptoJS.enc.Hex.parse(hexString)
// let srcs = CryptoJS.enc.Base64.parse(base64String);

const key = CryptoJS.enc.Utf8.parse("YekeAdmin1234567"); // 密钥
const iv = CryptoJS.enc.Utf8.parse("asdfghj123456789"); // 密钥偏移量

/**
 * CryptoJS 加密
 *
 * @param {String} encryptData  需要加密数据
 * @returns 加密后的数据
 * @memberof Utils
 */
export const encrypt: Function = (encryptData: string) => {
  const srcs = CryptoJS.enc.Utf8.parse(encryptData);
  const encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString();
};

/**
 * CryptoJS 解密
 *
 * @param {String} encryptData  需要加密数据
 * @returns 解密后的数据
 * @memberof Utils
 */
export const decrypt: Function = (encryptData: string) => {
  const decrypt = CryptoJS.AES.decrypt(encryptData, key, {
    iv,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return CryptoJS.enc.Utf8.stringify(decrypt).toString();
};
