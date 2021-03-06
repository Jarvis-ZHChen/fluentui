import { List } from '@fluentui/react-northstar';

const selectors = {
  list: `.${List.className}`,
  item: (itemIndex: number) => `.${List.className} .${List.Item.className}:nth-of-type(${itemIndex})`,
};

const config: ScreenerTestsConfig = {
  themes: ['teams', 'teamsDark', 'teamsHighContrast'],
  steps: [
    (builder, keys) =>
      builder
        .hover(selectors.item(2))
        .snapshot('Highlights an item')
        .click(selectors.item(2))
        .snapshot('Clicks on an item')
        .hover(selectors.item(3))
        .snapshot('Highlights another item')
        .keys(selectors.item(2), keys.downArrow)
        .snapshot('Focuses last item using keyboard'),
    (builder, keys) => builder.keys('body', keys.tab).snapshot('Focuses item'),
  ],
};

export default config;
