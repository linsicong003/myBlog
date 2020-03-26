---
title: 谈谈双指针法
date: 2020-3-25
sidebar: auto
sidebarDepth: 2
tags: 
  - 算法
categories:
  - Front
---

## 前言

上次我们谈过了贪心算法，

这段时间以来断断续续也有遇到需要使用其他思想进行解决的问题，

其中双指针法可能是我们解决问题用的最多的方法了。

<!-- more -->
![封面图](https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20200325-1.jpg)

## 双指针算法简介 

双指针，顾名思义，就是利用两个指针去遍历数组。 :smirk:

::: tip
双指针法同样适用于类数组问题的求解。
:::

通常地，遍历数组我们采用的是单指针（index）去遍历，

而双指针法顾名思义则是用两个指针去解决问题。

两个指针一般是在有序数组中使用，

一个在头一个在尾相向遍历，完成后的时间复杂度是O(n)。:smile:

## 双指针算法使用

要想知道双指针算法适用于什么样的场景，

那我们首先要知道双指针算法解决问题的时候是怎么样操作的：

### 用法分析 :flags:

一般的我们有 `front`、`end` 两个指针，分别指向开始与结束：

``` javascript
A = new Array(5);
front = 0;
end = A.length - 1;
```
因为我们的边界条件是首位指针相遇，

所以我们需要一个如下的循环：

``` javascript
while(front < end) {
    ...
}
```

## 常见使用范围

一般双指针多用于有序数组，但是也不乏一些新奇的用法;

下面我们以 `leetcode` 中的一些题目来看看究竟怎么使用：

### 两数求和 :flags:

![leetcode#167](https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20200325-2.png)

这种问题一般是寻找两个数的和为一特定值，

数组即便是无序的我们也可先将其操作为有序，

然后通过双指针法求解。

[leetcode#167](https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/description/?utm_source=LCUS&utm_medium=ip_redirect_q_uns&utm_campaign=transfer2china)

很容易我们可以有如下写法：

``` javascript
// 答案来源 Mermaid 发布的题解
// #167

const twoSum = function(numbers, target) {
    let len = numbers.length
    if(len < 2) return []
    //对撞指针
    let left = 0;
    let right = len - 1
    while(left < right){
        if(numbers[left] + numbers[right] === target){
            return [left+1, right+1]
        }
        else if(numbers[left] + numbers[right] < target){
            left++
        }else{
            right--
        }
       
    }
    return []
};
```
### 反转字符串中特定字符 :flags:

这种类似于找到两数之和，

实质是要遍历字符串后对某些条件的值进行加工操作。

我们以这么一道题为例：

![leetcode#345](https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20200323-3.png)

使用双指针，一个指针从头向尾遍历，一个指针从尾到头遍历，当两个指针都遍历到元音字符时，交换这两个元音字符。

为了快速判断一个字符是不是元音字符，我们将全部元音字符添加到集合 HashSet 中，从而以 O(1) 的时间复杂度进行该操作。

- :star: 时间复杂度为 O(N)：只需要遍历所有元素一次
- :star: 空间复杂度 O(1)：只需要使用两个额外变量

[leetcode#345](https://leetcode-cn.com/problems/reverse-vowels-of-a-string/)

``` javascript
// 答案来源 Mermaid 发布的题解
// #345
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let set = new Set(['a','e','i','o','u','A','E','I','O','U']);
    let arr = s.split('');
    let i =0;
    let j = arr.length-1;
    while(i<j){
        if(set.has(arr[i])){ // 左边是否有元音字母
            if(set.has(arr[j])){ // 如果左边有元音字母，右边也有，那么交换
                [arr[i],arr[j]] = [arr[j],arr[i]];
                i++;
            }
            j--;
        }else{
            i++;
        }
    }
    return arr.join('')
};
```
### 回文字符串 :flags: 

这里找了一道在验证回文串的基础上，

做了一点简易变形的题目：

![leetcode#680](https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20200323-4.png)

[leetcode#680](https://leetcode-cn.com/problems/valid-palindrome-ii/description/)

处理这个问题的关键是在常规验证回文字符串时，

若遇到第一个不符合回文的情况可以尝试删除一个字符，

需要注意的是这里可以从左边删除也可以从右边。

``` javascript
// 答案来源 Luke Hu 发布的题解
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s, flag = true) {
    let l = 0, r = s.length - 1;
    while (l < r && s[l] === s[r]) l++, r--;
    if (r <= l) return true;
    if (flag == true) return validPalindrome(s.slice(l, r), false) || validPalindrome(s.slice(l + 1, r + 1), false)
    return false;
};
```
### 归并两个有序数组 :flags:

同样的这也是一道非常经典的数组合并问题;

![leetcode#88](https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20200325-5.png)

``` javascript
// 答案来源 灵魂画手 发布的题解
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let len1 = m - 1;
    let len2 = n - 1;
    let len = m + n - 1;
    while(len1 >= 0 && len2 >= 0) {
        // 注意--符号在后面，表示先进行计算再减1，这种缩写缩短了代码
        nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
    }
    function arrayCopy(src, srcIndex, dest, destIndex, length) {
        dest.splice(destIndex, length, ...src.slice(srcIndex, srcIndex + length));
    }
    // 表示将nums2数组从下标0位置开始，拷贝到nums1数组中，从下标0位置开始，长度为len2+1
    arrayCopy(nums2, 0, nums1, 0, len2 + 1);
};
```

### 判断链表是否存在环 :flags:

这道题非常有趣，

还存在很多其他解法，感兴趣的同学可以自己研究一下。 :smirk:

![leetcode#141](https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20200323-6.png)

[leetcode#141](https://leetcode-cn.com/problems/linked-list-cycle/)

``` javascript
// 答案来源 秦时明月 发布的题解
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head || !head.next) return false;
    let fast = head.next;
    let slow = head;
    while(fast != slow){
        if(!fast || !fast.next){
            return false;
        }
        fast = fast.next.next;
        slow = slow.next;
    }
    return true;
};
```
### 找出最长子序列 :flags:

![leetcode#524](https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20200325-6.png)

[leetcode#524](https://leetcode-cn.com/problems/longest-word-in-dictionary-through-deleting/description/)

找出最长子序列的题目从来都不是简单的题目，

这里的思想需要我们好好思考消化。

``` javascript
// 答案来源 Ahian 发布的题解

/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
    // 先将数组按字典序排
    d = d.sort();
    let index=0,maxWord = '';
    // 遍历数组
    while(index<d.length){
        nowComparing = d[index];
        if(nowComparing.length>maxWord.length){
            // 如果正在对比的word 要比之前的长
            if(isSub(s,nowComparing)){
                maxWord = nowComparing;
            }
        }
        ++index;

    }
    return maxWord;
};
const isSub = function(s,key){
    let k=0,i_s=0;
    while(k<key.length){
        // 短字符的每一位都要在长的里
        if(i_s>s.length){
            return false;
        }
        if(s[i_s]==key[k]){
            ++k;
        }
        ++i_s;
    }
    return true
}
```
## 小结

`双指针` 在我们日常应用中十分常见，

无论使用的语言有没有“指针”，

这种解决问题的思想都是我们需要掌握的。 :smile:

## 参考资料

- https://hk029.gitbooks.io/leetbook/twopoint.html
- https://github.com/CyC2018/CS-Notes/blob/master/notes/Leetcode%20%E9%A2%98%E8%A7%A3%20-%20%E5%8F%8C%E6%8C%87%E9%92%88.md
