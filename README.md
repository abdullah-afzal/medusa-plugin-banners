# medusa-plugin-banners

[Documentation](https://github.com/abdullah-afzal/medusa-plugin-banners/blob/main/README.md)

If you are not familiar with Medusa, you can learn more on [the project web site](https://www.medusajs.com/).

<h2>
  Note: This plugin will be migrated to Medusa v2, when v2 will reach production readiness.
</h2>

## What is it?
A plugin that enables you to add banners for your categories aand collections.

## How to install?

1. Install the package with `yarn add medusa-plugin-banners` or `npm i medusa-plugin-banners`
2. In `medusa-config.js`, add the plugin to the `plugins` array and set `enableUI`

```js
const plugins = [
  // ... other plugins
  {
    resolve: `medusa-plugin-banners`,
    options: {
      enableUI: true
    }
  }
]
```
3. Run migrations, e.g. `npx medusa migrations run` (see: https://docs.medusajs.com/development/entities/migrations/overview) as plugin uses new tables.

4. Start project

  - After installation of a plugin, you will see new option on the sidebar named `Banners`.
  - You can check/set banners for each category and collection


## API Endpoints

To make it more simple and flexible, we add banners in the existing routes of categories and collection, you dont have to worry about new APIs

  ## Proposals, bugs, improvements

If you have an idea, what could be the next highest priority functionality, do not hesistate raise issue here: [Github issues](https://github.com/abdullah-afzal/medusa-plugin-banners/issues)

## License

MIT

## Pro version

The Pro version of medusa-plugin-banners expands on the features of the free version with more advanced capabilities such as:
- banners for other modules like discounts
- custome and promotional banners
- custome APIs
- and a lot more.

The Pro version is available under commercial licence - contact [abdullah-afzal](https://github.com/abdullah-afzal) for more information.

### Hide Pro version tab

We show what advanced features we offer in "Pro version" tab. We try to keep it non-intruisive, but if you feel it differently, you can always hide this tab by setting following environment variable:
`MEDUSA_ADMIN_BANNERS_HIDE_PRO=true`

After restarting your admin application, you shall have this tab hidden.

---

© 2024 [abdullah-afzal](https://github.com/abdullah-afzal)

---