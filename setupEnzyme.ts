/**
 * Enzyme是一个用于React的JavaScript测试实用程序，
 * 它使得更容易断言，操作和遍历您的React组件的输出，
 * 它模拟了jQuery的API，非常直观，易于使用和学习。
 *
 * https://github.com/Zyingying/Enzyme-API
 */

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter(),
});
