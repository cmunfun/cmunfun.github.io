# 文章命名
添加新文章，只需在 `_posts` 目录中添加一个文件，该文件遵循约定`YYYY-MM-DD-name-of-post.ext` 并包含必要的标题。
# 代码片段支持：
{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}
# 文章排版
# 标题 1
## 标题 2
### 标题 3
#### 标题 4
##### 标题 5
###### 标题 6
## 段落
*斜体*, **粗体**  ``代码``
## 无序列表
* 项目 1
* 项目 2
* 项目 3
## 有序列表
1. 项目 1
2. 项目 2
3. 项目 3
> 引用块
>
>
> 多行
## 图片
![示例文章]({{site.baseurl}}/assets/images/image-3.png)
这是示例文章内容
## 代码块
{% highlight html %}
<div class="nav">
    <ul>
        <li>About</li>
        <li>Contact</li>
        <li>Project</li>
    </ul>
</div>
{% endhighlight %}

这是示例文章内容
## 目录
页面目录代码 **目录**
{% highlight css %}
* 不要删除此行 (删除后不会展示)
{:toc}
{% endhighlight %}