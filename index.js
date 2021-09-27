const nodeMailer = require('nodemailer');
const axios = require('axios');
const config = require('./config');

/**
 * @description 通过QQ邮箱发送
 * @param { string } subject 结果文案
 * @param { string } html 结果html 
 */
const sendEmailFromQQ = async (subject, html) => {
  let cfg = config.email.qq;
  if (!cfg || !cfg.user || !cfg.pass) return;
  const transporter = nodeMailer.createTransport({
    service: 'qq',
    auth: {
      user: cfg.user,
      pass: cfg.pass,
    },
  })
  transporter.sendMail({
    from: cfg.from,
    to: cfg.to,
    subject,
    html,
  }, (err) => {
    if (err) return console.log(`发送邮件失败：${err}`, true);
    console.log('发送邮件成功')
  })
}

/**
 * @description 查询今日是否已经签到
 */
const getTodayCheckStatus = async () => {
  const { cookie, baseUrl, apiUrl } = config;
  let { data } = await axios({
    url: baseUrl + apiUrl.getTodayStatus,
    method: 'get',
    headers: {
      Cookie: cookie
    }
  })
  if (data.err_no) {
    await sendEmailFromQQ('今日掘金签到查询: 失败', JSON.stringify(data));
  }
  return { 
    error: data.err_no !== 0,
    isCheck: data.data
  }
}

/**
 * @description 掘金签到功能
 */
const checkIn = async () => {
  let {error, isCheck} = await getTodayDrawStatus();
  if (error) return console.log('查询签到失败');
  if (isCheck) return console.log('今日参与签到');
  const { cookie, baseUrl, apiUrl } = config;
  let { data } = await axios({
    url: baseUrl + apiUrl.checkIn,
    method: 'post',
    headers: {
      Cookie: cookie
    }
  })
  if (data.err_no) {
    console.log('签到失败');
    await sendEmailFromQQ('今日掘金签到：失败', JSON.stringify(data));
  } else {
    console.log(`签到成功! 当前积分: ${data.data.sum_point}`);
    await sendEmailFromQQ('今日掘金签到成功', JSON.stringify(data));
  }
}

/**
 * @description 掘金抽奖
 */
const draw = async () => {
  let { error, isDraw } = await getTodayCheckStatus();
  if (error) return console.log('查询抽奖次数失败');
  if (isDraw) return console.log('今日已无免费抽奖次数');
  const { cookie, baseUrl, apiUrl } = config;
  let { data } = await axios({
    url: baseUrl + apiUrl.drawLottery,
    method: 'post',
    headers: {
      Cookie: cookie
    }
  })
  if (data_err_no) return console.log('免费抽奖失败');
  console.log(`恭喜抽到: ${data.data.lottery_name}`);
}

/**
 * @description 获取今天免费抽奖的次数
 */
const getTodayDrawStatus = async () => {
  const {cookie, baseUrl, apiUrl} = config;
  let {data} = await axios({url: baseUrl + apiUrl.getLotteryConfig, method: 'get', headers: {Cookie: cookie}});
  if (data.err_no) {
      return {error: true, isDraw: false}
  } else {
      return {error: false, isDraw: data.data.free_count === 0}
  }
}

exports.juejin = async (event, context) => {
  console.log('开始');
  await checkIn();
  await draw();
  console.log('结束');
}
