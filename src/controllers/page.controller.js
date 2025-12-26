exports.home = (req, res) => {
  res.render('pages/home', { title: 'Sumago Infotech' });
};

exports.about = (req, res) => {
  res.render('pages/about', { title: 'About Us' });
};

exports.careers = (req, res) => {
  res.render('pages/careers', { title: 'Careers' });
};

