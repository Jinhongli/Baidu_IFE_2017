关键步骤为：
- 对父容器设置清除浮动。
- 对三栏均使用`box-sizing: border-box`，统一宽度。
- 三栏布局，左右固定宽度，中间栏宽度自适应，使用圣杯布局。

### 清除浮动
清除浮动所采取的方案是[A new micro clearfix hack](http://nicolasgallagher.com/micro-clearfix-hack/)，具体代码如下：

```css
.cf:before, .cf:after{
    content: " "; 
    display: table;
}
.cf:after{
    clear:both;
}
.cf{
    *zoom:1;
}
```

### 圣杯布局

[圣杯布局](https://my.oschina.net/jsan/blog/368543)

大致的思路就是：

1. `html`结构从上到下分别是中间栏、左栏、右栏。

2. 父容器左右具有一定的`padding`，分别于左右栏宽度对应。

3. 三栏均为`float: left`，中间栏`width: 100%`，左栏使用`magin-left: -100%`将其移动至左侧，右栏使用`magin-left: 200px/*右栏的宽度*/`将其移动至右侧。

4. 对左右两栏设置`position: relative`，并分别设置`left: -200px`和`right: -200px`，将其移动至父容器空出来的`padding`处。

5. 三栏之间的间隙通过调整移动的距离实现。