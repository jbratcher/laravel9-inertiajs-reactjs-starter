<div id="top"></div>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]


<br />
<div align="center">
  <h1 align="center">Laravel Inertia ReactJs Starter</h1>
  <p align="center">
    This is a starter code to start the project, which already includes multiple layout admin templates with login for authentication
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#screenshoot">Screenshot</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

### Built With

* [Laravel 9](https://laravel.com)
* [React.js](https://reactjs.org/)
* [Bootstrap 5](https://getbootstrap.com)
* [Inertia](https://inertiajs.com/)
* [Argon Dashboard 2](https://www.creative-tim.com/product/argon-dashboard)
* [Laravel Socialite](https://github.com/laravel/socialite)

## Screenshoot

| Login | Register | Landing Page |
| --- | --- | --- |
| [![Login](https://raw.githubusercontent.com/agungksidik/public-assets/master/laravel9-inertiajs-reactjs-starter/login_page.png)](#) | [![Register](https://raw.githubusercontent.com/agungksidik/public-assets/master/laravel9-inertiajs-reactjs-starter/register_page.png)](#) | [![Landing Page](https://raw.githubusercontent.com/agungksidik/public-assets/master/laravel9-inertiajs-reactjs-starter/home_page.png)](#) |

| Dashboard | Manage User | Profile Page |
| --- | --- | --- |
| [![Dashboard](https://raw.githubusercontent.com/agungksidik/public-assets/master/laravel9-inertiajs-reactjs-starter/dashboard_page.png)](#) | [![Manage User](https://raw.githubusercontent.com/agungksidik/public-assets/master/laravel9-inertiajs-reactjs-starter/manage_user.png)](#) | [![Profile Page](https://raw.githubusercontent.com/agungksidik/public-assets/master/laravel9-inertiajs-reactjs-starter/profile_page.png)](#) |

<!-- ROADMAP -->
## Roadmap

- [x] Integrations Argon Dashboard 2 HTML template to ReactJs
- [x] Multiple layout (Guest, Base, Auth)
- [x] Authentication
    - [x] Sign in
    - [x] Register 
    - [x] Google Sign in 
- [x] User Management
- [x] Profile
- [ ] Activity Log
- [ ] Roles and Permissions

See the [open issues](https://github.com/agungksidik/laravel9-inertiajs-reactjs-starter/issues) for a full list of proposed features (and known issues).

<!-- GETTING STARTED -->
## Getting Started

Get a local copy (clone the repo)

### Prerequisites

install Composer & NodeJs 

- [Composer](https://getcomposer.org/doc/00-intro.md)
- [Node Js](https://nodejs.org/en/download/)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/jbratcher/laravel9-inertiajs-reactjs-starter.git
   ```
2. Install dependency Laravel
   ```sh
   composer install
   ```
3. Install NPM packages
   ```sh
   npm install
   npm run dev
   ```
4. Run `php artisan key:generate`

5. Copy `.env.example` to `.env`
    ```sh
    cp .env.example .env
    ```
5. Add your database table information
    ```js    
    DB_DATABASE=yourdatabase_name
    DB_USERNAME=your_username
    DB_PASSWORD=your_password
   ```
5. Run migration & Seeder
   ```sh
   php artisan migrate --seed
   ```
6. Add your Google Oauth credentials | [Guide](https://developers.google.com/identity/protocols/oauth2)
   ```sh
    GOOGLE_CLIENT_ID='your_client_id'
    GOOGLE_CLIENT_SECRET='your_client_secret'
    GOOGLE_REDIRECT='your_callback_url'
   ```

<!-- USAGE EXAMPLES -->
## Usage

1. run server-side (Laravel)
   ```sh
   php artisan serve
   ```
2. See webpack.min js 
   ```sh
   mix.browserSync('your_url.test'); //if using Laravel Valet
   mix.browserSync('127.0.0.1:8000'); //if using artisan serve
   ```
3. run client-side (ReactJs)
   ```sh
   npm run hot
   ```
4. Default login credentials (database\factories\UserFactory.php)
   ```sh
   email: 
   default '123456'
   ```

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

This project is an extention of the work of [agungksidik]("https://github.com/agungksidik/laravel9-inertiajs-reactjs-starter)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/jbratcher/laravel9-inertiajs-reactjs-starter.svg?style=for-the-badge
[contributors-url]: https://github.com/jbratcher/laravel9-inertiajs-reactjs-starter/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jbratcher/laravel9-inertiajs-reactjs-starter.svg?style=for-the-badge
[forks-url]: https://github.com/jbratcher/laravel9-inertiajs-reactjs-starter/network/members
[stars-shield]: https://img.shields.io/github/stars/jbratcher/laravel9-inertiajs-reactjs-starter.svg?style=for-the-badge
[stars-url]: https://github.com/jbratcher/laravel9-inertiajs-reactjs-starter/stargazers
[issues-shield]: https://img.shields.io/github/issues/jbratcher/laravel9-inertiajs-reactjs-starter.svg?style=for-the-badge
[issues-url]: https://github.com/jbratcher/laravel9-inertiajs-reactjs-starter/issues
[license-shield]: https://img.shields.io/github/license/jbratcher/laravel9-inertiajs-reactjs-starter.svg?style=for-the-badge
[license-url]: https://github.com/jbratcher/laravel9-inertiajs-reactjs-starter/blob/master/LICENSE.txt