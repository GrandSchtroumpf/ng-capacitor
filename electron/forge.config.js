module.exports = {
  makers: [
    // APPX
    {
      name: '@electron-forge/maker-appx',
      config: {
        publisher: 'CN=developmentca',
      }
    },
    // Squirrel
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'ng-capacitor'
      }
    },
    {
      name: '@electron-forge/maker-zip'
    }
  ]
}
