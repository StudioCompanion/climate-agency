# The Climate Agency

_The Climate Agency is a marketing strategy consultancy, non-profit, and dedicated to help climate projects scale up._

<img src='/public/images/logos/CA.svg'/><br>

## Authors ✍️

- [Elena Marinaki](https://github.com/elenamarinaki) - elena@companion.studio
- [Josh Ellis](https://github.com/joshuaellis) - josh@companion.studio

## Environments 🌍

- [Staging](https://climate-agency.vercel.app/)
- [Storybook](https://62a9ead63eb1d915663b00fe-gtcsoqabeh.chromatic.com/?path=/story/blocks-netzero-block--default)

## Developing 🧱

### Built with

- next (^12.1.6) & typescript (^4.7.3)
- @storybook/react (^6.5.7)
- @stitches/react (^1.2.8)
- embla-carousel-react (^6.2.0)
- @react-spring (^9.4.5)

### Prerequisites 📝

#### Global dependencies for development

- [Node.js](https://nodejs.org/en/) -> an asynchronous event-driven JavaScript runtime, designed to build scalable network applications
- [nvm](https://github.com/nvm-sh/nvm) -> quickly install and use different versions of node via the command line

> 💡 The node version we are using in the project is 17.6.0. It can be found in the <code>.nvmrc</code> file.

#### Developing the project

##### Download the repo ⬇️

1. Clone the GitHub repo of the project:

```
git clone git@github.com:StudioCompanion/climate-agency.git
```

2. Navigate to the project in your local folder

```
cd climate-agency/
```

3. Install all dependencies and dev-dependencies in found `package.json` file

```
yarn install
```

##### After these steps, you are now ready to run the project locally 🚀

1. In your terminal, run:

```
yarn dev
```

This will run the website in your local server.

2. Run `Storybook` - for this you will need to open a separate terminal window.

```
yarn storybook
```

Here you can see all components in isolation.

## Delpoying / Publishing ✈️

There's an automatic pipeline from pushing to main to the vercel deployment.

## Versioning 📦

We use [SemVer](https://semver.org/) for versioning
