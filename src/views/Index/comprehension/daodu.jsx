import React from 'react';
import style from './daodu.module.scss';

export default function Daodu() {
  return (
    <div>
      <h1 className={style.title}>图书概述</h1>
      <p className={style.content}>
        这本书是一篇关于幸福的文章，它指出了人们在追求幸福时容易犯的一个错误——将自己的幸福感与别人相比较。文章中提到，我们应该关注自己的生活中那些让我们感到幸福的小事情，而不是一味地盯着别人的幸福。
      </p>
      <h1 className={style.title}>图书速读</h1>
      <p className={style.content}>
        这一章节主要讲了人们在比较自己和他人时容易忽略自己的幸福，而过度关注他人的快乐和自己的不快。同时，文章也提到了抱怨是导致我们变得不快乐的原因之一。
      </p>
    </div>
  );
}
