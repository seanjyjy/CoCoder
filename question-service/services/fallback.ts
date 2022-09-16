import { LeetCodeInfo } from 'types';
import QuestionDifficulty from '../../common/QuestionDifficulty';

export const EASY = [
  {
    questionId: '268',
    title: 'Missing Number',
    titleSlug: 'missing-number',
    content:
      '<p>Given an array <code>nums</code> containing <code>n</code> distinct numbers in the range <code>[0, n]</code>, return <em>the only number in the range that is missing from the array.</em></p>\n\n<p>&nbsp;</p>\n<p><strong>Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [3,0,1]\n<strong>Output:</strong> 2\n<strong>Explanation:</strong> n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.\n</pre>\n\n<p><strong>Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [0,1]\n<strong>Output:</strong> 2\n<strong>Explanation:</strong> n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.\n</pre>\n\n<p><strong>Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [9,6,4,2,3,5,7,0,1]\n<strong>Output:</strong> 8\n<strong>Explanation:</strong> n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>n == nums.length</code></li>\n\t<li><code>1 &lt;= n &lt;= 10<sup>4</sup></code></li>\n\t<li><code>0 &lt;= nums[i] &lt;= n</code></li>\n\t<li>All the numbers of <code>nums</code> are <strong>unique</strong>.</li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Follow up:</strong> Could you implement a solution using only <code>O(1)</code> extra space complexity and <code>O(n)</code> runtime complexity?</p>\n',
    difficulty: 'Easy',
    categoryTitle: 'Algorithms',
    codeSnippets: [
      {
        lang: 'C++',
        langSlug: 'cpp',
        code: 'class Solution {\npublic:\n    int missingNumber(vector<int>& nums) {\n        \n    }\n};',
      },
      {
        lang: 'Java',
        langSlug: 'java',
        code: 'class Solution {\n    public int missingNumber(int[] nums) {\n        \n    }\n}',
      },
      {
        lang: 'Python',
        langSlug: 'python',
        code: 'class Solution(object):\n    def missingNumber(self, nums):\n        """\n        :type nums: List[int]\n        :rtype: int\n        """\n        ',
      },
      {
        lang: 'Python3',
        langSlug: 'python3',
        code: 'class Solution:\n    def missingNumber(self, nums: List[int]) -> int:\n        ',
      },
      {
        lang: 'C',
        langSlug: 'c',
        code: '\n\nint missingNumber(int* nums, int numsSize){\n\n}',
      },
      {
        lang: 'C#',
        langSlug: 'csharp',
        code: 'public class Solution {\n    public int MissingNumber(int[] nums) {\n        \n    }\n}',
      },
      {
        lang: 'JavaScript',
        langSlug: 'javascript',
        code: '/**\n * @param {number[]} nums\n * @return {number}\n */\nvar missingNumber = function(nums) {\n    \n};',
      },
      {
        lang: 'Ruby',
        langSlug: 'ruby',
        code: '# @param {Integer[]} nums\n# @return {Integer}\ndef missing_number(nums)\n    \nend',
      },
      {
        lang: 'Swift',
        langSlug: 'swift',
        code: 'class Solution {\n    func missingNumber(_ nums: [Int]) -> Int {\n        \n    }\n}',
      },
      {
        lang: 'Go',
        langSlug: 'golang',
        code: 'func missingNumber(nums []int) int {\n    \n}',
      },
      {
        lang: 'Scala',
        langSlug: 'scala',
        code: 'object Solution {\n    def missingNumber(nums: Array[Int]): Int = {\n        \n    }\n}',
      },
      {
        lang: 'Kotlin',
        langSlug: 'kotlin',
        code: 'class Solution {\n    fun missingNumber(nums: IntArray): Int {\n        \n    }\n}',
      },
      {
        lang: 'Rust',
        langSlug: 'rust',
        code: 'impl Solution {\n    pub fn missing_number(nums: Vec<i32>) -> i32 {\n        \n    }\n}',
      },
      {
        lang: 'PHP',
        langSlug: 'php',
        code: 'class Solution {\n\n    /**\n     * @param Integer[] $nums\n     * @return Integer\n     */\n    function missingNumber($nums) {\n        \n    }\n}',
      },
      {
        lang: 'TypeScript',
        langSlug: 'typescript',
        code: 'function missingNumber(nums: number[]): number {\n\n};',
      },
      {
        lang: 'Racket',
        langSlug: 'racket',
        code: '(define/contract (missing-number nums)\n  (-> (listof exact-integer?) exact-integer?)\n\n  )',
      },
      {
        lang: 'Erlang',
        langSlug: 'erlang',
        code: '-spec missing_number(Nums :: [integer()]) -> integer().\nmissing_number(Nums) ->\n  .',
      },
      {
        lang: 'Elixir',
        langSlug: 'elixir',
        code: 'defmodule Solution do\n  @spec missing_number(nums :: [integer]) :: integer\n  def missing_number(nums) do\n\n  end\nend',
      },
      {
        lang: 'Dart',
        langSlug: 'dart',
        code: 'class Solution {\n  int missingNumber(List<int> nums) {\n\n  }\n}',
      },
    ],
    metaData:
      '{\r\n  "name": "missingNumber",\r\n  "params": [\r\n    {\r\n      "name": "nums",\r\n      "type": "integer[]"\r\n    }\r\n  ],\r\n  "return": {\r\n    "type": "integer"\r\n  }\r\n}',
  },
  {
    questionId: '169',
    title: 'Majority Element',
    titleSlug: 'majority-element',
    content:
      '<p>Given an array <code>nums</code> of size <code>n</code>, return <em>the majority element</em>.</p>\n\n<p>The majority element is the element that appears more than <code>&lfloor;n / 2&rfloor;</code> times. You may assume that the majority element always exists in the array.</p>\n\n<p>&nbsp;</p>\n<p><strong>Example 1:</strong></p>\n<pre><strong>Input:</strong> nums = [3,2,3]\n<strong>Output:</strong> 3\n</pre><p><strong>Example 2:</strong></p>\n<pre><strong>Input:</strong> nums = [2,2,1,1,1,2,2]\n<strong>Output:</strong> 2\n</pre>\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>n == nums.length</code></li>\n\t<li><code>1 &lt;= n &lt;= 5 * 10<sup>4</sup></code></li>\n\t<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>\n</ul>\n\n<p>&nbsp;</p>\n<strong>Follow-up:</strong> Could you solve the problem in linear time and in <code>O(1)</code> space?',
    difficulty: 'Easy',
    categoryTitle: 'Algorithms',
    codeSnippets: [
      {
        lang: 'C++',
        langSlug: 'cpp',
        code: 'class Solution {\npublic:\n    int majorityElement(vector<int>& nums) {\n        \n    }\n};',
      },
      {
        lang: 'Java',
        langSlug: 'java',
        code: 'class Solution {\n    public int majorityElement(int[] nums) {\n        \n    }\n}',
      },
      {
        lang: 'Python',
        langSlug: 'python',
        code: 'class Solution(object):\n    def majorityElement(self, nums):\n        """\n        :type nums: List[int]\n        :rtype: int\n        """\n        ',
      },
      {
        lang: 'Python3',
        langSlug: 'python3',
        code: 'class Solution:\n    def majorityElement(self, nums: List[int]) -> int:\n        ',
      },
      {
        lang: 'C',
        langSlug: 'c',
        code: '\n\nint majorityElement(int* nums, int numsSize){\n\n}',
      },
      {
        lang: 'C#',
        langSlug: 'csharp',
        code: 'public class Solution {\n    public int MajorityElement(int[] nums) {\n        \n    }\n}',
      },
      {
        lang: 'JavaScript',
        langSlug: 'javascript',
        code: '/**\n * @param {number[]} nums\n * @return {number}\n */\nvar majorityElement = function(nums) {\n    \n};',
      },
      {
        lang: 'Ruby',
        langSlug: 'ruby',
        code: '# @param {Integer[]} nums\n# @return {Integer}\ndef majority_element(nums)\n    \nend',
      },
      {
        lang: 'Swift',
        langSlug: 'swift',
        code: 'class Solution {\n    func majorityElement(_ nums: [Int]) -> Int {\n        \n    }\n}',
      },
      {
        lang: 'Go',
        langSlug: 'golang',
        code: 'func majorityElement(nums []int) int {\n    \n}',
      },
      {
        lang: 'Scala',
        langSlug: 'scala',
        code: 'object Solution {\n    def majorityElement(nums: Array[Int]): Int = {\n        \n    }\n}',
      },
      {
        lang: 'Kotlin',
        langSlug: 'kotlin',
        code: 'class Solution {\n    fun majorityElement(nums: IntArray): Int {\n        \n    }\n}',
      },
      {
        lang: 'Rust',
        langSlug: 'rust',
        code: 'impl Solution {\n    pub fn majority_element(nums: Vec<i32>) -> i32 {\n        \n    }\n}',
      },
      {
        lang: 'PHP',
        langSlug: 'php',
        code: 'class Solution {\n\n    /**\n     * @param Integer[] $nums\n     * @return Integer\n     */\n    function majorityElement($nums) {\n        \n    }\n}',
      },
      {
        lang: 'TypeScript',
        langSlug: 'typescript',
        code: 'function majorityElement(nums: number[]): number {\n\n};',
      },
      {
        lang: 'Racket',
        langSlug: 'racket',
        code: '(define/contract (majority-element nums)\n  (-> (listof exact-integer?) exact-integer?)\n\n  )',
      },
      {
        lang: 'Erlang',
        langSlug: 'erlang',
        code: '-spec majority_element(Nums :: [integer()]) -> integer().\nmajority_element(Nums) ->\n  .',
      },
      {
        lang: 'Elixir',
        langSlug: 'elixir',
        code: 'defmodule Solution do\n  @spec majority_element(nums :: [integer]) :: integer\n  def majority_element(nums) do\n\n  end\nend',
      },
      {
        lang: 'Dart',
        langSlug: 'dart',
        code: 'class Solution {\n  int majorityElement(List<int> nums) {\n\n  }\n}',
      },
    ],
    metaData:
      '{\r\n  "name": "majorityElement",\r\n  "params": [\r\n    {\r\n      "name": "nums",\r\n      "type": "integer[]"\r\n    }\r\n  ],\r\n  "return": {\r\n    "type": "integer"\r\n  }\r\n}',
  },
  {
    questionId: '1128',
    title: 'Remove All Adjacent Duplicates In String',
    titleSlug: 'remove-all-adjacent-duplicates-in-string',
    content:
      '<p>You are given a string <code>s</code> consisting of lowercase English letters. A <strong>duplicate removal</strong> consists of choosing two <strong>adjacent</strong> and <strong>equal</strong> letters and removing them.</p>\n\n<p>We repeatedly make <strong>duplicate removals</strong> on <code>s</code> until we no longer can.</p>\n\n<p>Return <em>the final string after all such duplicate removals have been made</em>. It can be proven that the answer is <strong>unique</strong>.</p>\n\n<p>&nbsp;</p>\n<p><strong>Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;abbaca&quot;\n<strong>Output:</strong> &quot;ca&quot;\n<strong>Explanation:</strong> \nFor example, in &quot;abbaca&quot; we could remove &quot;bb&quot; since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is &quot;aaca&quot;, of which only &quot;aa&quot; is possible, so the final string is &quot;ca&quot;.\n</pre>\n\n<p><strong>Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;azxxzy&quot;\n<strong>Output:</strong> &quot;ay&quot;\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>s</code> consists of lowercase English letters.</li>\n</ul>\n',
    difficulty: 'Easy',
    categoryTitle: 'Algorithms',
    codeSnippets: [
      {
        lang: 'C++',
        langSlug: 'cpp',
        code: 'class Solution {\npublic:\n    string removeDuplicates(string s) {\n        \n    }\n};',
      },
      {
        lang: 'Java',
        langSlug: 'java',
        code: 'class Solution {\n    public String removeDuplicates(String s) {\n        \n    }\n}',
      },
      {
        lang: 'Python',
        langSlug: 'python',
        code: 'class Solution(object):\n    def removeDuplicates(self, s):\n        """\n        :type s: str\n        :rtype: str\n        """\n        ',
      },
      {
        lang: 'Python3',
        langSlug: 'python3',
        code: 'class Solution:\n    def removeDuplicates(self, s: str) -> str:\n        ',
      },
      {
        lang: 'C',
        langSlug: 'c',
        code: '\n\nchar * removeDuplicates(char * s){\n\n}',
      },
      {
        lang: 'C#',
        langSlug: 'csharp',
        code: 'public class Solution {\n    public string RemoveDuplicates(string s) {\n        \n    }\n}',
      },
      {
        lang: 'JavaScript',
        langSlug: 'javascript',
        code: '/**\n * @param {string} s\n * @return {string}\n */\nvar removeDuplicates = function(s) {\n    \n};',
      },
      {
        lang: 'Ruby',
        langSlug: 'ruby',
        code: '# @param {String} s\n# @return {String}\ndef remove_duplicates(s)\n    \nend',
      },
      {
        lang: 'Swift',
        langSlug: 'swift',
        code: 'class Solution {\n    func removeDuplicates(_ s: String) -> String {\n        \n    }\n}',
      },
      {
        lang: 'Go',
        langSlug: 'golang',
        code: 'func removeDuplicates(s string) string {\n    \n}',
      },
      {
        lang: 'Scala',
        langSlug: 'scala',
        code: 'object Solution {\n    def removeDuplicates(s: String): String = {\n        \n    }\n}',
      },
      {
        lang: 'Kotlin',
        langSlug: 'kotlin',
        code: 'class Solution {\n    fun removeDuplicates(s: String): String {\n        \n    }\n}',
      },
      {
        lang: 'Rust',
        langSlug: 'rust',
        code: 'impl Solution {\n    pub fn remove_duplicates(s: String) -> String {\n        \n    }\n}',
      },
      {
        lang: 'PHP',
        langSlug: 'php',
        code: 'class Solution {\n\n    /**\n     * @param String $s\n     * @return String\n     */\n    function removeDuplicates($s) {\n        \n    }\n}',
      },
      {
        lang: 'TypeScript',
        langSlug: 'typescript',
        code: 'function removeDuplicates(s: string): string {\n\n};',
      },
      {
        lang: 'Racket',
        langSlug: 'racket',
        code: '(define/contract (remove-duplicates s)\n  (-> string? string?)\n\n  )',
      },
      {
        lang: 'Erlang',
        langSlug: 'erlang',
        code: '-spec remove_duplicates(S :: unicode:unicode_binary()) -> unicode:unicode_binary().\nremove_duplicates(S) ->\n  .',
      },
      {
        lang: 'Elixir',
        langSlug: 'elixir',
        code: 'defmodule Solution do\n  @spec remove_duplicates(s :: String.t) :: String.t\n  def remove_duplicates(s) do\n\n  end\nend',
      },
      {
        lang: 'Dart',
        langSlug: 'dart',
        code: 'class Solution {\n  String removeDuplicates(String s) {\n\n  }\n}',
      },
    ],
    metaData:
      '{\n  "name": "removeDuplicates",\n  "params": [\n    {\n      "name": "s",\n      "type": "string"\n    }\n  ],\n  "return": {\n    "type": "string"\n  }\n}',
  },
  {
    questionId: '2469',
    title: 'Longest Subsequence With Limited Sum',
    titleSlug: 'longest-subsequence-with-limited-sum',
    content:
      '<p>You are given an integer array <code>nums</code> of length <code>n</code>, and an integer array <code>queries</code> of length <code>m</code>.</p>\n\n<p>Return <em>an array </em><code>answer</code><em> of length </em><code>m</code><em> where </em><code>answer[i]</code><em> is the <strong>maximum</strong> size of a <strong>subsequence</strong> that you can take from </em><code>nums</code><em> such that the <strong>sum</strong> of its elements is less than or equal to </em><code>queries[i]</code>.</p>\n\n<p>A <strong>subsequence</strong> is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.</p>\n\n<p>&nbsp;</p>\n<p><strong>Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [4,5,2,1], queries = [3,10,21]\n<strong>Output:</strong> [2,3,4]\n<strong>Explanation:</strong> We answer the queries as follows:\n- The subsequence [2,1] has a sum less than or equal to 3. It can be proven that 2 is the maximum size of such a subsequence, so answer[0] = 2.\n- The subsequence [4,5,1] has a sum less than or equal to 10. It can be proven that 3 is the maximum size of such a subsequence, so answer[1] = 3.\n- The subsequence [4,5,2,1] has a sum less than or equal to 21. It can be proven that 4 is the maximum size of such a subsequence, so answer[2] = 4.\n</pre>\n\n<p><strong>Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [2,3,4,5], queries = [1]\n<strong>Output:</strong> [0]\n<strong>Explanation:</strong> The empty subsequence is the only subsequence that has a sum less than or equal to 1, so answer[0] = 0.</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>n == nums.length</code></li>\n\t<li><code>m == queries.length</code></li>\n\t<li><code>1 &lt;= n, m &lt;= 1000</code></li>\n\t<li><code>1 &lt;= nums[i], queries[i] &lt;= 10<sup>6</sup></code></li>\n</ul>\n',
    difficulty: 'Easy',
    categoryTitle: 'Algorithms',
    codeSnippets: [
      {
        lang: 'C++',
        langSlug: 'cpp',
        code: 'class Solution {\npublic:\n    vector<int> answerQueries(vector<int>& nums, vector<int>& queries) {\n        \n    }\n};',
      },
      {
        lang: 'Java',
        langSlug: 'java',
        code: 'class Solution {\n    public int[] answerQueries(int[] nums, int[] queries) {\n        \n    }\n}',
      },
      {
        lang: 'Python',
        langSlug: 'python',
        code: 'class Solution(object):\n    def answerQueries(self, nums, queries):\n        """\n        :type nums: List[int]\n        :type queries: List[int]\n        :rtype: List[int]\n        """\n        ',
      },
      {
        lang: 'Python3',
        langSlug: 'python3',
        code: 'class Solution:\n    def answerQueries(self, nums: List[int], queries: List[int]) -> List[int]:\n        ',
      },
      {
        lang: 'C',
        langSlug: 'c',
        code: '\n\n/**\n * Note: The returned array must be malloced, assume caller calls free().\n */\nint* answerQueries(int* nums, int numsSize, int* queries, int queriesSize, int* returnSize){\n\n}',
      },
      {
        lang: 'C#',
        langSlug: 'csharp',
        code: 'public class Solution {\n    public int[] AnswerQueries(int[] nums, int[] queries) {\n        \n    }\n}',
      },
      {
        lang: 'JavaScript',
        langSlug: 'javascript',
        code: '/**\n * @param {number[]} nums\n * @param {number[]} queries\n * @return {number[]}\n */\nvar answerQueries = function(nums, queries) {\n    \n};',
      },
      {
        lang: 'Ruby',
        langSlug: 'ruby',
        code: '# @param {Integer[]} nums\n# @param {Integer[]} queries\n# @return {Integer[]}\ndef answer_queries(nums, queries)\n    \nend',
      },
      {
        lang: 'Swift',
        langSlug: 'swift',
        code: 'class Solution {\n    func answerQueries(_ nums: [Int], _ queries: [Int]) -> [Int] {\n        \n    }\n}',
      },
      {
        lang: 'Go',
        langSlug: 'golang',
        code: 'func answerQueries(nums []int, queries []int) []int {\n    \n}',
      },
      {
        lang: 'Scala',
        langSlug: 'scala',
        code: 'object Solution {\n    def answerQueries(nums: Array[Int], queries: Array[Int]): Array[Int] = {\n        \n    }\n}',
      },
      {
        lang: 'Kotlin',
        langSlug: 'kotlin',
        code: 'class Solution {\n    fun answerQueries(nums: IntArray, queries: IntArray): IntArray {\n        \n    }\n}',
      },
      {
        lang: 'Rust',
        langSlug: 'rust',
        code: 'impl Solution {\n    pub fn answer_queries(nums: Vec<i32>, queries: Vec<i32>) -> Vec<i32> {\n        \n    }\n}',
      },
      {
        lang: 'PHP',
        langSlug: 'php',
        code: 'class Solution {\n\n    /**\n     * @param Integer[] $nums\n     * @param Integer[] $queries\n     * @return Integer[]\n     */\n    function answerQueries($nums, $queries) {\n        \n    }\n}',
      },
      {
        lang: 'TypeScript',
        langSlug: 'typescript',
        code: 'function answerQueries(nums: number[], queries: number[]): number[] {\n\n};',
      },
      {
        lang: 'Racket',
        langSlug: 'racket',
        code: '(define/contract (answer-queries nums queries)\n  (-> (listof exact-integer?) (listof exact-integer?) (listof exact-integer?))\n\n  )',
      },
      {
        lang: 'Erlang',
        langSlug: 'erlang',
        code: '-spec answer_queries(Nums :: [integer()], Queries :: [integer()]) -> [integer()].\nanswer_queries(Nums, Queries) ->\n  .',
      },
      {
        lang: 'Elixir',
        langSlug: 'elixir',
        code: 'defmodule Solution do\n  @spec answer_queries(nums :: [integer], queries :: [integer]) :: [integer]\n  def answer_queries(nums, queries) do\n\n  end\nend',
      },
      {
        lang: 'Dart',
        langSlug: 'dart',
        code: 'class Solution {\n  List<int> answerQueries(List<int> nums, List<int> queries) {\n\n  }\n}',
      },
    ],
    metaData:
      '{\n  "name": "answerQueries",\n  "params": [\n    {\n      "name": "nums",\n      "type": "integer[]"\n    },\n    {\n      "type": "integer[]",\n      "name": "queries"\n    }\n  ],\n  "return": {\n    "type": "integer[]"\n  }\n}',
  },
  {
    questionId: '1603',
    title: 'Running Sum of 1d Array',
    titleSlug: 'running-sum-of-1d-array',
    content:
      '<p>Given an array <code>nums</code>. We define a running sum of an array as&nbsp;<code>runningSum[i] = sum(nums[0]&hellip;nums[i])</code>.</p>\r\n\r\n<p>Return the running sum of <code>nums</code>.</p>\r\n\r\n<p>&nbsp;</p>\r\n<p><strong>Example 1:</strong></p>\r\n\r\n<pre>\r\n<strong>Input:</strong> nums = [1,2,3,4]\r\n<strong>Output:</strong> [1,3,6,10]\r\n<strong>Explanation:</strong> Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].</pre>\r\n\r\n<p><strong>Example 2:</strong></p>\r\n\r\n<pre>\r\n<strong>Input:</strong> nums = [1,1,1,1,1]\r\n<strong>Output:</strong> [1,2,3,4,5]\r\n<strong>Explanation:</strong> Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].</pre>\r\n\r\n<p><strong>Example 3:</strong></p>\r\n\r\n<pre>\r\n<strong>Input:</strong> nums = [3,1,2,10,1]\r\n<strong>Output:</strong> [3,4,6,16,17]\r\n</pre>\r\n\r\n<p>&nbsp;</p>\r\n<p><strong>Constraints:</strong></p>\r\n\r\n<ul>\r\n\t<li><code>1 &lt;= nums.length &lt;= 1000</code></li>\r\n\t<li><code>-10^6&nbsp;&lt;= nums[i] &lt;=&nbsp;10^6</code></li>\r\n</ul>',
    difficulty: 'Easy',
    categoryTitle: 'Algorithms',
    codeSnippets: [
      {
        lang: 'C++',
        langSlug: 'cpp',
        code: 'class Solution {\r\npublic:\r\n    vector<int> runningSum(vector<int>& nums) {\r\n        \r\n    }\r\n};',
      },
      {
        lang: 'Java',
        langSlug: 'java',
        code: 'class Solution {\r\n    public int[] runningSum(int[] nums) {\r\n        \r\n    }\r\n}',
      },
      {
        lang: 'Python',
        langSlug: 'python',
        code: 'class Solution(object):\r\n    def runningSum(self, nums):\r\n        """\r\n        :type nums: List[int]\r\n        :rtype: List[int]\r\n        """',
      },
      {
        lang: 'Python3',
        langSlug: 'python3',
        code: 'class Solution:\r\n    def runningSum(self, nums: List[int]) -> List[int]:',
      },
      {
        lang: 'C',
        langSlug: 'c',
        code: '/**\r\n * Note: The returned array must be malloced, assume caller calls free().\r\n */\r\nint* runningSum(int* nums, int numsSize, int* returnSize){\r\n\r\n}',
      },
      {
        lang: 'C#',
        langSlug: 'csharp',
        code: 'public class Solution {\r\n    public int[] RunningSum(int[] nums) {\r\n        \r\n    }\r\n}',
      },
      {
        lang: 'JavaScript',
        langSlug: 'javascript',
        code: '/**\r\n * @param {number[]} nums\r\n * @return {number[]}\r\n */\r\nvar runningSum = function(nums) {\r\n    \r\n};',
      },
      {
        lang: 'Ruby',
        langSlug: 'ruby',
        code: '# @param {Integer[]} nums\r\n# @return {Integer[]}\r\ndef running_sum(nums)\r\n    \r\nend',
      },
      {
        lang: 'Swift',
        langSlug: 'swift',
        code: 'class Solution {\r\n    func runningSum(_ nums: [Int]) -> [Int] {\r\n        \r\n    }\r\n}',
      },
      {
        lang: 'Go',
        langSlug: 'golang',
        code: 'func runningSum(nums []int) []int {\r\n    \r\n}',
      },
      {
        lang: 'Scala',
        langSlug: 'scala',
        code: 'object Solution {\r\n    def runningSum(nums: Array[Int]): Array[Int] = {\r\n        \r\n    }\r\n}',
      },
      {
        lang: 'Kotlin',
        langSlug: 'kotlin',
        code: 'class Solution {\r\n    fun runningSum(nums: IntArray): IntArray {\r\n        \r\n    }\r\n}',
      },
      {
        lang: 'Rust',
        langSlug: 'rust',
        code: 'impl Solution {\r\n    pub fn running_sum(nums: Vec<i32>) -> Vec<i32> {\r\n        \r\n    }\r\n}',
      },
      {
        lang: 'PHP',
        langSlug: 'php',
        code: 'class Solution {\r\n\r\n    /**\r\n     * @param Integer[] $nums\r\n     * @return Integer[]\r\n     */\r\n    function runningSum($nums) {\r\n        \r\n    }\r\n}',
      },
      {
        lang: 'TypeScript',
        langSlug: 'typescript',
        code: 'function runningSum(nums: number[]): number[] {\r\n\r\n};',
      },
    ],
    metaData:
      '{\n  "name": "runningSum",\n  "params": [\n    {\n      "name": "nums",\n      "type": "integer[]"\n    }\n  ],\n  "return": {\n    "type": "integer[]"\n  },\n  "manual": false\n}',
  },
];
export const MEDIUM = [
  {
    questionId: '2217',
    title: 'Step-By-Step Directions From a Binary Tree Node to Another',
    titleSlug: 'step-by-step-directions-from-a-binary-tree-node-to-another',
    content:
      '<p>You are given the <code>root</code> of a <strong>binary tree</strong> with <code>n</code> nodes. Each node is uniquely assigned a value from <code>1</code> to <code>n</code>. You are also given an integer <code>startValue</code> representing the value of the start node <code>s</code>, and a different integer <code>destValue</code> representing the value of the destination node <code>t</code>.</p>\n\n<p>Find the <strong>shortest path</strong> starting from node <code>s</code> and ending at node <code>t</code>. Generate step-by-step directions of such path as a string consisting of only the <strong>uppercase</strong> letters <code>&#39;L&#39;</code>, <code>&#39;R&#39;</code>, and <code>&#39;U&#39;</code>. Each letter indicates a specific direction:</p>\n\n<ul>\n\t<li><code>&#39;L&#39;</code> means to go from a node to its <strong>left child</strong> node.</li>\n\t<li><code>&#39;R&#39;</code> means to go from a node to its <strong>right child</strong> node.</li>\n\t<li><code>&#39;U&#39;</code> means to go from a node to its <strong>parent</strong> node.</li>\n</ul>\n\n<p>Return <em>the step-by-step directions of the <strong>shortest path</strong> from node </em><code>s</code><em> to node</em> <code>t</code>.</p>\n\n<p>&nbsp;</p>\n<p><strong>Example 1:</strong></p>\n<img alt="" src="https://assets.leetcode.com/uploads/2021/11/15/eg1.png" style="width: 214px; height: 163px;" />\n<pre>\n<strong>Input:</strong> root = [5,1,2,3,null,6,4], startValue = 3, destValue = 6\n<strong>Output:</strong> &quot;UURL&quot;\n<strong>Explanation:</strong> The shortest path is: 3 &rarr; 1 &rarr; 5 &rarr; 2 &rarr; 6.\n</pre>\n\n<p><strong>Example 2:</strong></p>\n<img alt="" src="https://assets.leetcode.com/uploads/2021/11/15/eg2.png" style="width: 74px; height: 102px;" />\n<pre>\n<strong>Input:</strong> root = [2,1], startValue = 2, destValue = 1\n<strong>Output:</strong> &quot;L&quot;\n<strong>Explanation:</strong> The shortest path is: 2 &rarr; 1.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in the tree is <code>n</code>.</li>\n\t<li><code>2 &lt;= n &lt;= 10<sup>5</sup></code></li>\n\t<li><code>1 &lt;= Node.val &lt;= n</code></li>\n\t<li>All the values in the tree are <strong>unique</strong>.</li>\n\t<li><code>1 &lt;= startValue, destValue &lt;= n</code></li>\n\t<li><code>startValue != destValue</code></li>\n</ul>\n',
    difficulty: 'Medium',
    categoryTitle: 'Algorithms',
    codeSnippets: [
      {
        lang: 'C++',
        langSlug: 'cpp',
        code: '/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n * };\n */\nclass Solution {\npublic:\n    string getDirections(TreeNode* root, int startValue, int destValue) {\n        \n    }\n};',
      },
      {
        lang: 'Java',
        langSlug: 'java',
        code: '/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public String getDirections(TreeNode root, int startValue, int destValue) {\n        \n    }\n}',
      },
      {
        lang: 'Python',
        langSlug: 'python',
        code: '# Definition for a binary tree node.\n# class TreeNode(object):\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution(object):\n    def getDirections(self, root, startValue, destValue):\n        """\n        :type root: Optional[TreeNode]\n        :type startValue: int\n        :type destValue: int\n        :rtype: str\n        """\n        ',
      },
      {
        lang: 'Python3',
        langSlug: 'python3',
        code: '# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def getDirections(self, root: Optional[TreeNode], startValue: int, destValue: int) -> str:\n        ',
      },
      {
        lang: 'C',
        langSlug: 'c',
        code: '/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     struct TreeNode *left;\n *     struct TreeNode *right;\n * };\n */\n\n\nchar * getDirections(struct TreeNode* root, int startValue, int destValue){\n\n}',
      },
      {
        lang: 'C#',
        langSlug: 'csharp',
        code: '/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     public int val;\n *     public TreeNode left;\n *     public TreeNode right;\n *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\npublic class Solution {\n    public string GetDirections(TreeNode root, int startValue, int destValue) {\n        \n    }\n}',
      },
      {
        lang: 'JavaScript',
        langSlug: 'javascript',
        code: '/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @param {number} startValue\n * @param {number} destValue\n * @return {string}\n */\nvar getDirections = function(root, startValue, destValue) {\n    \n};',
      },
      {
        lang: 'Ruby',
        langSlug: 'ruby',
        code: '# Definition for a binary tree node.\n# class TreeNode\n#     attr_accessor :val, :left, :right\n#     def initialize(val = 0, left = nil, right = nil)\n#         @val = val\n#         @left = left\n#         @right = right\n#     end\n# end\n# @param {TreeNode} root\n# @param {Integer} start_value\n# @param {Integer} dest_value\n# @return {String}\ndef get_directions(root, start_value, dest_value)\n    \nend',
      },
      {
        lang: 'Swift',
        langSlug: 'swift',
        code: '/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     public var val: Int\n *     public var left: TreeNode?\n *     public var right: TreeNode?\n *     public init() { self.val = 0; self.left = nil; self.right = nil; }\n *     public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }\n *     public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {\n *         self.val = val\n *         self.left = left\n *         self.right = right\n *     }\n * }\n */\nclass Solution {\n    func getDirections(_ root: TreeNode?, _ startValue: Int, _ destValue: Int) -> String {\n        \n    }\n}',
      },
      {
        lang: 'Go',
        langSlug: 'golang',
        code: '/**\n * Definition for a binary tree node.\n * type TreeNode struct {\n *     Val int\n *     Left *TreeNode\n *     Right *TreeNode\n * }\n */\nfunc getDirections(root *TreeNode, startValue int, destValue int) string {\n    \n}',
      },
      {
        lang: 'Scala',
        langSlug: 'scala',
        code: '/**\n * Definition for a binary tree node.\n * class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {\n *   var value: Int = _value\n *   var left: TreeNode = _left\n *   var right: TreeNode = _right\n * }\n */\nobject Solution {\n    def getDirections(root: TreeNode, startValue: Int, destValue: Int): String = {\n        \n    }\n}',
      },
      {
        lang: 'Kotlin',
        langSlug: 'kotlin',
        code: '/**\n * Example:\n * var ti = TreeNode(5)\n * var v = ti.`val`\n * Definition for a binary tree node.\n * class TreeNode(var `val`: Int) {\n *     var left: TreeNode? = null\n *     var right: TreeNode? = null\n * }\n */\nclass Solution {\n    fun getDirections(root: TreeNode?, startValue: Int, destValue: Int): String {\n        \n    }\n}',
      },
      {
        lang: 'Rust',
        langSlug: 'rust',
        code: '// Definition for a binary tree node.\n// #[derive(Debug, PartialEq, Eq)]\n// pub struct TreeNode {\n//   pub val: i32,\n//   pub left: Option<Rc<RefCell<TreeNode>>>,\n//   pub right: Option<Rc<RefCell<TreeNode>>>,\n// }\n// \n// impl TreeNode {\n//   #[inline]\n//   pub fn new(val: i32) -> Self {\n//     TreeNode {\n//       val,\n//       left: None,\n//       right: None\n//     }\n//   }\n// }\nuse std::rc::Rc;\nuse std::cell::RefCell;\nimpl Solution {\n    pub fn get_directions(root: Option<Rc<RefCell<TreeNode>>>, start_value: i32, dest_value: i32) -> String {\n        \n    }\n}',
      },
      {
        lang: 'PHP',
        langSlug: 'php',
        code: '/**\n * Definition for a binary tree node.\n * class TreeNode {\n *     public $val = null;\n *     public $left = null;\n *     public $right = null;\n *     function __construct($val = 0, $left = null, $right = null) {\n *         $this->val = $val;\n *         $this->left = $left;\n *         $this->right = $right;\n *     }\n * }\n */\nclass Solution {\n\n    /**\n     * @param TreeNode $root\n     * @param Integer $startValue\n     * @param Integer $destValue\n     * @return String\n     */\n    function getDirections($root, $startValue, $destValue) {\n        \n    }\n}',
      },
      {
        lang: 'TypeScript',
        langSlug: 'typescript',
        code: '/**\n * Definition for a binary tree node.\n * class TreeNode {\n *     val: number\n *     left: TreeNode | null\n *     right: TreeNode | null\n *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {\n *         this.val = (val===undefined ? 0 : val)\n *         this.left = (left===undefined ? null : left)\n *         this.right = (right===undefined ? null : right)\n *     }\n * }\n */\n\nfunction getDirections(root: TreeNode | null, startValue: number, destValue: number): string {\n\n};',
      },
      {
        lang: 'Racket',
        langSlug: 'racket',
        code: '; Definition for a binary tree node.\n#|\n\n; val : integer?\n; left : (or/c tree-node? #f)\n; right : (or/c tree-node? #f)\n(struct tree-node\n  (val left right) #:mutable #:transparent)\n\n; constructor\n(define (make-tree-node [val 0])\n  (tree-node val #f #f))\n\n|#\n\n(define/contract (get-directions root startValue destValue)\n  (-> (or/c tree-node? #f) exact-integer? exact-integer? string?)\n\n  )',
      },
      {
        lang: 'Erlang',
        langSlug: 'erlang',
        code: "%% Definition for a binary tree node.\n%%\n%% -record(tree_node, {val = 0 :: integer(),\n%%                     left = null  :: 'null' | #tree_node{},\n%%                     right = null :: 'null' | #tree_node{}}).\n\n-spec get_directions(Root :: #tree_node{} | null, StartValue :: integer(), DestValue :: integer()) -> unicode:unicode_binary().\nget_directions(Root, StartValue, DestValue) ->\n  .",
      },
      {
        lang: 'Elixir',
        langSlug: 'elixir',
        code: '# Definition for a binary tree node.\n#\n# defmodule TreeNode do\n#   @type t :: %__MODULE__{\n#           val: integer,\n#           left: TreeNode.t() | nil,\n#           right: TreeNode.t() | nil\n#         }\n#   defstruct val: 0, left: nil, right: nil\n# end\n\ndefmodule Solution do\n  @spec get_directions(root :: TreeNode.t | nil, start_value :: integer, dest_value :: integer) :: String.t\n  def get_directions(root, start_value, dest_value) do\n\n  end\nend',
      },
      {
        lang: 'Dart',
        langSlug: 'dart',
        code: '/**\n * Definition for a binary tree node.\n * class TreeNode {\n *   int val;\n *   TreeNode? left;\n *   TreeNode? right;\n *   TreeNode([this.val = 0, this.left, this.right]);\n * }\n */\nclass Solution {\n  String getDirections(TreeNode? root, int startValue, int destValue) {\n\n  }\n}',
      },
    ],
    metaData:
      '{\n  "name": "getDirections",\n  "params": [\n    {\n      "name": "root",\n      "type": "TreeNode"\n    },\n    {\n      "type": "integer",\n      "name": "startValue"\n    },\n    {\n      "type": "integer",\n      "name": "destValue"\n    }\n  ],\n  "return": {\n    "type": "string"\n  }\n}',
  },
  {
    questionId: '2107',
    title: 'Find Unique Binary String',
    titleSlug: 'find-unique-binary-string',
    content:
      '<p>Given an array of strings <code>nums</code> containing <code>n</code> <strong>unique</strong> binary strings each of length <code>n</code>, return <em>a binary string of length </em><code>n</code><em> that <strong>does not appear</strong> in </em><code>nums</code><em>. If there are multiple answers, you may return <strong>any</strong> of them</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong>Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [&quot;01&quot;,&quot;10&quot;]\n<strong>Output:</strong> &quot;11&quot;\n<strong>Explanation:</strong> &quot;11&quot; does not appear in nums. &quot;00&quot; would also be correct.\n</pre>\n\n<p><strong>Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [&quot;00&quot;,&quot;01&quot;]\n<strong>Output:</strong> &quot;11&quot;\n<strong>Explanation:</strong> &quot;11&quot; does not appear in nums. &quot;10&quot; would also be correct.\n</pre>\n\n<p><strong>Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [&quot;111&quot;,&quot;011&quot;,&quot;001&quot;]\n<strong>Output:</strong> &quot;101&quot;\n<strong>Explanation:</strong> &quot;101&quot; does not appear in nums. &quot;000&quot;, &quot;010&quot;, &quot;100&quot;, and &quot;110&quot; would also be correct.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>n == nums.length</code></li>\n\t<li><code>1 &lt;= n &lt;= 16</code></li>\n\t<li><code>nums[i].length == n</code></li>\n\t<li><code>nums[i] </code>is either <code>&#39;0&#39;</code> or <code>&#39;1&#39;</code>.</li>\n\t<li>All the strings of <code>nums</code> are <strong>unique</strong>.</li>\n</ul>\n',
    difficulty: 'Medium',
    categoryTitle: 'Algorithms',
    codeSnippets: [
      {
        lang: 'C++',
        langSlug: 'cpp',
        code: 'class Solution {\npublic:\n    string findDifferentBinaryString(vector<string>& nums) {\n        \n    }\n};',
      },
      {
        lang: 'Java',
        langSlug: 'java',
        code: 'class Solution {\n    public String findDifferentBinaryString(String[] nums) {\n        \n    }\n}',
      },
      {
        lang: 'Python',
        langSlug: 'python',
        code: 'class Solution(object):\n    def findDifferentBinaryString(self, nums):\n        """\n        :type nums: List[str]\n        :rtype: str\n        """\n        ',
      },
      {
        lang: 'Python3',
        langSlug: 'python3',
        code: 'class Solution:\n    def findDifferentBinaryString(self, nums: List[str]) -> str:\n        ',
      },
      {
        lang: 'C',
        langSlug: 'c',
        code: '\n\nchar * findDifferentBinaryString(char ** nums, int numsSize){\n\n}',
      },
      {
        lang: 'C#',
        langSlug: 'csharp',
        code: 'public class Solution {\n    public string FindDifferentBinaryString(string[] nums) {\n        \n    }\n}',
      },
      {
        lang: 'JavaScript',
        langSlug: 'javascript',
        code: '/**\n * @param {string[]} nums\n * @return {string}\n */\nvar findDifferentBinaryString = function(nums) {\n    \n};',
      },
      {
        lang: 'Ruby',
        langSlug: 'ruby',
        code: '# @param {String[]} nums\n# @return {String}\ndef find_different_binary_string(nums)\n    \nend',
      },
      {
        lang: 'Swift',
        langSlug: 'swift',
        code: 'class Solution {\n    func findDifferentBinaryString(_ nums: [String]) -> String {\n        \n    }\n}',
      },
      {
        lang: 'Go',
        langSlug: 'golang',
        code: 'func findDifferentBinaryString(nums []string) string {\n    \n}',
      },
      {
        lang: 'Scala',
        langSlug: 'scala',
        code: 'object Solution {\n    def findDifferentBinaryString(nums: Array[String]): String = {\n        \n    }\n}',
      },
      {
        lang: 'Kotlin',
        langSlug: 'kotlin',
        code: 'class Solution {\n    fun findDifferentBinaryString(nums: Array<String>): String {\n        \n    }\n}',
      },
      {
        lang: 'Rust',
        langSlug: 'rust',
        code: 'impl Solution {\n    pub fn find_different_binary_string(nums: Vec<String>) -> String {\n        \n    }\n}',
      },
      {
        lang: 'PHP',
        langSlug: 'php',
        code: 'class Solution {\n\n    /**\n     * @param String[] $nums\n     * @return String\n     */\n    function findDifferentBinaryString($nums) {\n        \n    }\n}',
      },
      {
        lang: 'TypeScript',
        langSlug: 'typescript',
        code: 'function findDifferentBinaryString(nums: string[]): string {\n\n};',
      },
      {
        lang: 'Racket',
        langSlug: 'racket',
        code: '(define/contract (find-different-binary-string nums)\n  (-> (listof string?) string?)\n\n  )',
      },
      {
        lang: 'Erlang',
        langSlug: 'erlang',
        code: '-spec find_different_binary_string(Nums :: [unicode:unicode_binary()]) -> unicode:unicode_binary().\nfind_different_binary_string(Nums) ->\n  .',
      },
      {
        lang: 'Elixir',
        langSlug: 'elixir',
        code: 'defmodule Solution do\n  @spec find_different_binary_string(nums :: [String.t]) :: String.t\n  def find_different_binary_string(nums) do\n\n  end\nend',
      },
      {
        lang: 'Dart',
        langSlug: 'dart',
        code: 'class Solution {\n  String findDifferentBinaryString(List<String> nums) {\n\n  }\n}',
      },
    ],
    metaData:
      '{\n  "name": "findDifferentBinaryString",\n  "params": [\n    {\n      "type": "string[]",\n      "name": "nums"\n    }\n  ],\n  "return": {\n    "type": "string"\n  }\n}',
  },
  {
    questionId: '1446',
    title: 'Angle Between Hands of a Clock',
    titleSlug: 'angle-between-hands-of-a-clock',
    content:
      '<p>Given two numbers, <code>hour</code> and <code>minutes</code>, return <em>the smaller angle (in degrees) formed between the </em><code>hour</code><em> and the </em><code>minute</code><em> hand</em>.</p>\n\n<p>Answers within <code>10<sup>-5</sup></code> of the actual value will be accepted as correct.</p>\n\n<p>&nbsp;</p>\n<p><strong>Example 1:</strong></p>\n<img alt="" src="https://assets.leetcode.com/uploads/2019/12/26/sample_1_1673.png" style="width: 300px; height: 296px;" />\n<pre>\n<strong>Input:</strong> hour = 12, minutes = 30\n<strong>Output:</strong> 165\n</pre>\n\n<p><strong>Example 2:</strong></p>\n<img alt="" src="https://assets.leetcode.com/uploads/2019/12/26/sample_2_1673.png" style="width: 300px; height: 301px;" />\n<pre>\n<strong>Input:</strong> hour = 3, minutes = 30\n<strong>Output:</strong> 75\n</pre>\n\n<p><strong>Example 3:</strong></p>\n<img alt="" src="https://assets.leetcode.com/uploads/2019/12/26/sample_3_1673.png" style="width: 300px; height: 301px;" />\n<pre>\n<strong>Input:</strong> hour = 3, minutes = 15\n<strong>Output:</strong> 7.5\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= hour &lt;= 12</code></li>\n\t<li><code>0 &lt;= minutes &lt;= 59</code></li>\n</ul>\n',
    difficulty: 'Medium',
    categoryTitle: 'Algorithms',
    codeSnippets: [
      {
        lang: 'C++',
        langSlug: 'cpp',
        code: 'class Solution {\npublic:\n    double angleClock(int hour, int minutes) {\n        \n    }\n};',
      },
      {
        lang: 'Java',
        langSlug: 'java',
        code: 'class Solution {\n    public double angleClock(int hour, int minutes) {\n        \n    }\n}',
      },
      {
        lang: 'Python',
        langSlug: 'python',
        code: 'class Solution(object):\n    def angleClock(self, hour, minutes):\n        """\n        :type hour: int\n        :type minutes: int\n        :rtype: float\n        """\n        ',
      },
      {
        lang: 'Python3',
        langSlug: 'python3',
        code: 'class Solution:\n    def angleClock(self, hour: int, minutes: int) -> float:\n        ',
      },
      {
        lang: 'C',
        langSlug: 'c',
        code: '\n\ndouble angleClock(int hour, int minutes){\n\n}',
      },
      {
        lang: 'C#',
        langSlug: 'csharp',
        code: 'public class Solution {\n    public double AngleClock(int hour, int minutes) {\n        \n    }\n}',
      },
      {
        lang: 'JavaScript',
        langSlug: 'javascript',
        code: '/**\n * @param {number} hour\n * @param {number} minutes\n * @return {number}\n */\nvar angleClock = function(hour, minutes) {\n    \n};',
      },
      {
        lang: 'Ruby',
        langSlug: 'ruby',
        code: '# @param {Integer} hour\n# @param {Integer} minutes\n# @return {Float}\ndef angle_clock(hour, minutes)\n    \nend',
      },
      {
        lang: 'Swift',
        langSlug: 'swift',
        code: 'class Solution {\n    func angleClock(_ hour: Int, _ minutes: Int) -> Double {\n        \n    }\n}',
      },
      {
        lang: 'Go',
        langSlug: 'golang',
        code: 'func angleClock(hour int, minutes int) float64 {\n    \n}',
      },
      {
        lang: 'Scala',
        langSlug: 'scala',
        code: 'object Solution {\n    def angleClock(hour: Int, minutes: Int): Double = {\n        \n    }\n}',
      },
      {
        lang: 'Kotlin',
        langSlug: 'kotlin',
        code: 'class Solution {\n    fun angleClock(hour: Int, minutes: Int): Double {\n        \n    }\n}',
      },
      {
        lang: 'Rust',
        langSlug: 'rust',
        code: 'impl Solution {\n    pub fn angle_clock(hour: i32, minutes: i32) -> f64 {\n        \n    }\n}',
      },
      {
        lang: 'PHP',
        langSlug: 'php',
        code: 'class Solution {\n\n    /**\n     * @param Integer $hour\n     * @param Integer $minutes\n     * @return Float\n     */\n    function angleClock($hour, $minutes) {\n        \n    }\n}',
      },
      {
        lang: 'TypeScript',
        langSlug: 'typescript',
        code: 'function angleClock(hour: number, minutes: number): number {\n\n};',
      },
      {
        lang: 'Racket',
        langSlug: 'racket',
        code: '(define/contract (angle-clock hour minutes)\n  (-> exact-integer? exact-integer? flonum?)\n\n  )',
      },
      {
        lang: 'Erlang',
        langSlug: 'erlang',
        code: '-spec angle_clock(Hour :: integer(), Minutes :: integer()) -> float().\nangle_clock(Hour, Minutes) ->\n  .',
      },
      {
        lang: 'Elixir',
        langSlug: 'elixir',
        code: 'defmodule Solution do\n  @spec angle_clock(hour :: integer, minutes :: integer) :: float\n  def angle_clock(hour, minutes) do\n\n  end\nend',
      },
      {
        lang: 'Dart',
        langSlug: 'dart',
        code: 'class Solution {\n  double angleClock(int hour, int minutes) {\n\n  }\n}',
      },
    ],
    metaData:
      '{\n  "name": "angleClock",\n  "params": [\n    {\n      "name": "hour",\n      "type": "integer"\n    },\n    {\n      "type": "integer",\n      "name": "minutes"\n    }\n  ],\n  "return": {\n    "type": "double"\n  }\n}',
  },
  {
    questionId: '19',
    title: 'Remove Nth Node From End of List',
    titleSlug: 'remove-nth-node-from-end-of-list',
    content:
      '<p>Given the <code>head</code> of a linked list, remove the <code>n<sup>th</sup></code> node from the end of the list and return its head.</p>\n\n<p>&nbsp;</p>\n<p><strong>Example 1:</strong></p>\n<img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg" style="width: 542px; height: 222px;" />\n<pre>\n<strong>Input:</strong> head = [1,2,3,4,5], n = 2\n<strong>Output:</strong> [1,2,3,5]\n</pre>\n\n<p><strong>Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> head = [1], n = 1\n<strong>Output:</strong> []\n</pre>\n\n<p><strong>Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> head = [1,2], n = 1\n<strong>Output:</strong> [1]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li>The number of nodes in the list is <code>sz</code>.</li>\n\t<li><code>1 &lt;= sz &lt;= 30</code></li>\n\t<li><code>0 &lt;= Node.val &lt;= 100</code></li>\n\t<li><code>1 &lt;= n &lt;= sz</code></li>\n</ul>\n\n<p>&nbsp;</p>\n<p><strong>Follow up:</strong> Could you do this in one pass?</p>\n',
    difficulty: 'Medium',
    categoryTitle: 'Algorithms',
    codeSnippets: [
      {
        lang: 'C++',
        langSlug: 'cpp',
        code: '/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     ListNode *next;\n *     ListNode() : val(0), next(nullptr) {}\n *     ListNode(int x) : val(x), next(nullptr) {}\n *     ListNode(int x, ListNode *next) : val(x), next(next) {}\n * };\n */\nclass Solution {\npublic:\n    ListNode* removeNthFromEnd(ListNode* head, int n) {\n        \n    }\n};',
      },
      {
        lang: 'Java',
        langSlug: 'java',
        code: '/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public ListNode removeNthFromEnd(ListNode head, int n) {\n        \n    }\n}',
      },
      {
        lang: 'Python',
        langSlug: 'python',
        code: '# Definition for singly-linked list.\n# class ListNode(object):\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\nclass Solution(object):\n    def removeNthFromEnd(self, head, n):\n        """\n        :type head: ListNode\n        :type n: int\n        :rtype: ListNode\n        """\n        ',
      },
      {
        lang: 'Python3',
        langSlug: 'python3',
        code: '# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\nclass Solution:\n    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:\n        ',
      },
      {
        lang: 'C',
        langSlug: 'c',
        code: '/**\n * Definition for singly-linked list.\n * struct ListNode {\n *     int val;\n *     struct ListNode *next;\n * };\n */\n\n\nstruct ListNode* removeNthFromEnd(struct ListNode* head, int n){\n\n}',
      },
      {
        lang: 'C#',
        langSlug: 'csharp',
        code: '/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     public int val;\n *     public ListNode next;\n *     public ListNode(int val=0, ListNode next=null) {\n *         this.val = val;\n *         this.next = next;\n *     }\n * }\n */\npublic class Solution {\n    public ListNode RemoveNthFromEnd(ListNode head, int n) {\n        \n    }\n}',
      },
      {
        lang: 'JavaScript',
        langSlug: 'javascript',
        code: '/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @param {ListNode} head\n * @param {number} n\n * @return {ListNode}\n */\nvar removeNthFromEnd = function(head, n) {\n    \n};',
      },
      {
        lang: 'Ruby',
        langSlug: 'ruby',
        code: '# Definition for singly-linked list.\n# class ListNode\n#     attr_accessor :val, :next\n#     def initialize(val = 0, _next = nil)\n#         @val = val\n#         @next = _next\n#     end\n# end\n# @param {ListNode} head\n# @param {Integer} n\n# @return {ListNode}\ndef remove_nth_from_end(head, n)\n    \nend',
      },
      {
        lang: 'Swift',
        langSlug: 'swift',
        code: '/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     public var val: Int\n *     public var next: ListNode?\n *     public init() { self.val = 0; self.next = nil; }\n *     public init(_ val: Int) { self.val = val; self.next = nil; }\n *     public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }\n * }\n */\nclass Solution {\n    func removeNthFromEnd(_ head: ListNode?, _ n: Int) -> ListNode? {\n        \n    }\n}',
      },
      {
        lang: 'Go',
        langSlug: 'golang',
        code: '/**\n * Definition for singly-linked list.\n * type ListNode struct {\n *     Val int\n *     Next *ListNode\n * }\n */\nfunc removeNthFromEnd(head *ListNode, n int) *ListNode {\n    \n}',
      },
      {
        lang: 'Scala',
        langSlug: 'scala',
        code: '/**\n * Definition for singly-linked list.\n * class ListNode(_x: Int = 0, _next: ListNode = null) {\n *   var next: ListNode = _next\n *   var x: Int = _x\n * }\n */\nobject Solution {\n    def removeNthFromEnd(head: ListNode, n: Int): ListNode = {\n        \n    }\n}',
      },
      {
        lang: 'Kotlin',
        langSlug: 'kotlin',
        code: '/**\n * Example:\n * var li = ListNode(5)\n * var v = li.`val`\n * Definition for singly-linked list.\n * class ListNode(var `val`: Int) {\n *     var next: ListNode? = null\n * }\n */\nclass Solution {\n    fun removeNthFromEnd(head: ListNode?, n: Int): ListNode? {\n        \n    }\n}',
      },
      {
        lang: 'Rust',
        langSlug: 'rust',
        code: '// Definition for singly-linked list.\n// #[derive(PartialEq, Eq, Clone, Debug)]\n// pub struct ListNode {\n//   pub val: i32,\n//   pub next: Option<Box<ListNode>>\n// }\n// \n// impl ListNode {\n//   #[inline]\n//   fn new(val: i32) -> Self {\n//     ListNode {\n//       next: None,\n//       val\n//     }\n//   }\n// }\nimpl Solution {\n    pub fn remove_nth_from_end(head: Option<Box<ListNode>>, n: i32) -> Option<Box<ListNode>> {\n        \n    }\n}',
      },
      {
        lang: 'PHP',
        langSlug: 'php',
        code: '/**\n * Definition for a singly-linked list.\n * class ListNode {\n *     public $val = 0;\n *     public $next = null;\n *     function __construct($val = 0, $next = null) {\n *         $this->val = $val;\n *         $this->next = $next;\n *     }\n * }\n */\nclass Solution {\n\n    /**\n     * @param ListNode $head\n     * @param Integer $n\n     * @return ListNode\n     */\n    function removeNthFromEnd($head, $n) {\n        \n    }\n}',
      },
      {
        lang: 'TypeScript',
        langSlug: 'typescript',
        code: '/**\n * Definition for singly-linked list.\n * class ListNode {\n *     val: number\n *     next: ListNode | null\n *     constructor(val?: number, next?: ListNode | null) {\n *         this.val = (val===undefined ? 0 : val)\n *         this.next = (next===undefined ? null : next)\n *     }\n * }\n */\n\nfunction removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {\n\n};',
      },
      {
        lang: 'Racket',
        langSlug: 'racket',
        code: '; Definition for singly-linked list:\n#|\n\n; val : integer?\n; next : (or/c list-node? #f)\n(struct list-node\n  (val next) #:mutable #:transparent)\n\n; constructor\n(define (make-list-node [val 0])\n  (list-node val #f))\n\n|#\n\n(define/contract (remove-nth-from-end head n)\n  (-> (or/c list-node? #f) exact-integer? (or/c list-node? #f))\n\n  )',
      },
      {
        lang: 'Erlang',
        langSlug: 'erlang',
        code: "%% Definition for singly-linked list.\n%%\n%% -record(list_node, {val = 0 :: integer(),\n%%                     next = null :: 'null' | #list_node{}}).\n\n-spec remove_nth_from_end(Head :: #list_node{} | null, N :: integer()) -> #list_node{} | null.\nremove_nth_from_end(Head, N) ->\n  .",
      },
      {
        lang: 'Elixir',
        langSlug: 'elixir',
        code: '# Definition for singly-linked list.\n#\n# defmodule ListNode do\n#   @type t :: %__MODULE__{\n#           val: integer,\n#           next: ListNode.t() | nil\n#         }\n#   defstruct val: 0, next: nil\n# end\n\ndefmodule Solution do\n  @spec remove_nth_from_end(head :: ListNode.t | nil, n :: integer) :: ListNode.t | nil\n  def remove_nth_from_end(head, n) do\n\n  end\nend',
      },
      {
        lang: 'Dart',
        langSlug: 'dart',
        code: '/**\n * Definition for singly-linked list.\n * class ListNode {\n *   int val;\n *   ListNode? next;\n *   ListNode([this.val = 0, this.next]);\n * }\n */\nclass Solution {\n  ListNode? removeNthFromEnd(ListNode? head, int n) {\n\n  }\n}',
      },
    ],
    metaData:
      '{\r\n  "name": "removeNthFromEnd",\r\n  "params": [\r\n    {\r\n      "name": "head",\r\n      "type": "ListNode",\r\n      "dealloc": false\r\n    },\r\n    {\r\n      "name": "n",\r\n      "type": "integer"\r\n    }\r\n  ],\r\n  "return": {\r\n    "type": "ListNode",\r\n    "dealloc": true\r\n  }\r\n}',
  },
  {
    questionId: '2146',
    title: 'Check if Word Can Be Placed In Crossword',
    titleSlug: 'check-if-word-can-be-placed-in-crossword',
    content:
      '<p>You are given an <code>m x n</code> matrix <code>board</code>, representing the<strong> current </strong>state of a crossword puzzle. The crossword contains lowercase English letters (from solved words), <code>&#39; &#39;</code> to represent any <strong>empty </strong>cells, and <code>&#39;#&#39;</code> to represent any <strong>blocked</strong> cells.</p>\n\n<p>A word can be placed<strong> horizontally</strong> (left to right <strong>or</strong> right to left) or <strong>vertically</strong> (top to bottom <strong>or</strong> bottom to top) in the board if:</p>\n\n<ul>\n\t<li>It does not occupy a cell containing the character <code>&#39;#&#39;</code>.</li>\n\t<li>The cell each letter is placed in must either be <code>&#39; &#39;</code> (empty) or <strong>match</strong> the letter already on the <code>board</code>.</li>\n\t<li>There must not be any empty cells <code>&#39; &#39;</code> or other lowercase letters <strong>directly left or right</strong><strong> </strong>of the word if the word was placed <strong>horizontally</strong>.</li>\n\t<li>There must not be any empty cells <code>&#39; &#39;</code> or other lowercase letters <strong>directly above or below</strong> the word if the word was placed <strong>vertically</strong>.</li>\n</ul>\n\n<p>Given a string <code>word</code>, return <code>true</code><em> if </em><code>word</code><em> can be placed in </em><code>board</code><em>, or </em><code>false</code><em> <strong>otherwise</strong></em>.</p>\n\n<p>&nbsp;</p>\n<p><strong>Example 1:</strong></p>\n<img alt="" src="https://assets.leetcode.com/uploads/2021/10/04/crossword-ex1-1.png" style="width: 478px; height: 180px;" />\n<pre>\n<strong>Input:</strong> board = [[&quot;#&quot;, &quot; &quot;, &quot;#&quot;], [&quot; &quot;, &quot; &quot;, &quot;#&quot;], [&quot;#&quot;, &quot;c&quot;, &quot; &quot;]], word = &quot;abc&quot;\n<strong>Output:</strong> true\n<strong>Explanation:</strong> The word &quot;abc&quot; can be placed as shown above (top to bottom).\n</pre>\n\n<p><strong>Example 2:</strong></p>\n<img alt="" src="https://assets.leetcode.com/uploads/2021/10/04/crossword-ex2-1.png" style="width: 180px; height: 180px;" />\n<pre>\n<strong>Input:</strong> board = [[&quot; &quot;, &quot;#&quot;, &quot;a&quot;], [&quot; &quot;, &quot;#&quot;, &quot;c&quot;], [&quot; &quot;, &quot;#&quot;, &quot;a&quot;]], word = &quot;ac&quot;\n<strong>Output:</strong> false\n<strong>Explanation:</strong> It is impossible to place the word because there will always be a space/letter above or below it.</pre>\n\n<p><strong>Example 3:</strong></p>\n<img alt="" src="https://assets.leetcode.com/uploads/2021/10/04/crossword-ex3-1.png" style="width: 478px; height: 180px;" />\n<pre>\n<strong>Input:</strong> board = [[&quot;#&quot;, &quot; &quot;, &quot;#&quot;], [&quot; &quot;, &quot; &quot;, &quot;#&quot;], [&quot;#&quot;, &quot; &quot;, &quot;c&quot;]], word = &quot;ca&quot;\n<strong>Output:</strong> true\n<strong>Explanation:</strong> The word &quot;ca&quot; can be placed as shown above (right to left). \n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>m == board.length</code></li>\n\t<li><code>n == board[i].length</code></li>\n\t<li><code>1 &lt;= m * n &lt;= 2 * 10<sup>5</sup></code></li>\n\t<li><code>board[i][j]</code> will be <code>&#39; &#39;</code>, <code>&#39;#&#39;</code>, or a lowercase English letter.</li>\n\t<li><code>1 &lt;= word.length &lt;= max(m, n)</code></li>\n\t<li><code>word</code> will contain only lowercase English letters.</li>\n</ul>\n',
    difficulty: 'Medium',
    categoryTitle: 'Algorithms',
    codeSnippets: [
      {
        lang: 'C++',
        langSlug: 'cpp',
        code: 'class Solution {\npublic:\n    bool placeWordInCrossword(vector<vector<char>>& board, string word) {\n        \n    }\n};',
      },
      {
        lang: 'Java',
        langSlug: 'java',
        code: 'class Solution {\n    public boolean placeWordInCrossword(char[][] board, String word) {\n        \n    }\n}',
      },
      {
        lang: 'Python',
        langSlug: 'python',
        code: 'class Solution(object):\n    def placeWordInCrossword(self, board, word):\n        """\n        :type board: List[List[str]]\n        :type word: str\n        :rtype: bool\n        """\n        ',
      },
      {
        lang: 'Python3',
        langSlug: 'python3',
        code: 'class Solution:\n    def placeWordInCrossword(self, board: List[List[str]], word: str) -> bool:\n        ',
      },
      {
        lang: 'C',
        langSlug: 'c',
        code: '\n\nbool placeWordInCrossword(char** board, int boardSize, int* boardColSize, char * word){\n\n}',
      },
      {
        lang: 'C#',
        langSlug: 'csharp',
        code: 'public class Solution {\n    public bool PlaceWordInCrossword(char[][] board, string word) {\n        \n    }\n}',
      },
      {
        lang: 'JavaScript',
        langSlug: 'javascript',
        code: '/**\n * @param {character[][]} board\n * @param {string} word\n * @return {boolean}\n */\nvar placeWordInCrossword = function(board, word) {\n    \n};',
      },
      {
        lang: 'Ruby',
        langSlug: 'ruby',
        code: '# @param {Character[][]} board\n# @param {String} word\n# @return {Boolean}\ndef place_word_in_crossword(board, word)\n    \nend',
      },
      {
        lang: 'Swift',
        langSlug: 'swift',
        code: 'class Solution {\n    func placeWordInCrossword(_ board: [[Character]], _ word: String) -> Bool {\n        \n    }\n}',
      },
      {
        lang: 'Go',
        langSlug: 'golang',
        code: 'func placeWordInCrossword(board [][]byte, word string) bool {\n    \n}',
      },
      {
        lang: 'Scala',
        langSlug: 'scala',
        code: 'object Solution {\n    def placeWordInCrossword(board: Array[Array[Char]], word: String): Boolean = {\n        \n    }\n}',
      },
      {
        lang: 'Kotlin',
        langSlug: 'kotlin',
        code: 'class Solution {\n    fun placeWordInCrossword(board: Array<CharArray>, word: String): Boolean {\n        \n    }\n}',
      },
      {
        lang: 'Rust',
        langSlug: 'rust',
        code: 'impl Solution {\n    pub fn place_word_in_crossword(board: Vec<Vec<char>>, word: String) -> bool {\n        \n    }\n}',
      },
      {
        lang: 'PHP',
        langSlug: 'php',
        code: 'class Solution {\n\n    /**\n     * @param String[][] $board\n     * @param String $word\n     * @return Boolean\n     */\n    function placeWordInCrossword($board, $word) {\n        \n    }\n}',
      },
      {
        lang: 'TypeScript',
        langSlug: 'typescript',
        code: 'function placeWordInCrossword(board: string[][], word: string): boolean {\n\n};',
      },
      {
        lang: 'Racket',
        langSlug: 'racket',
        code: '(define/contract (place-word-in-crossword board word)\n  (-> (listof (listof char?)) string? boolean?)\n\n  )',
      },
      {
        lang: 'Erlang',
        langSlug: 'erlang',
        code: '-spec place_word_in_crossword(Board :: [[char()]], Word :: unicode:unicode_binary()) -> boolean().\nplace_word_in_crossword(Board, Word) ->\n  .',
      },
      {
        lang: 'Elixir',
        langSlug: 'elixir',
        code: 'defmodule Solution do\n  @spec place_word_in_crossword(board :: [[char]], word :: String.t) :: boolean\n  def place_word_in_crossword(board, word) do\n\n  end\nend',
      },
      {
        lang: 'Dart',
        langSlug: 'dart',
        code: 'class Solution {\n  bool placeWordInCrossword(List<List<String>> board, String word) {\n\n  }\n}',
      },
    ],
    metaData:
      '{\n  "name": "placeWordInCrossword",\n  "params": [\n    {\n      "name": "board",\n      "type": "character[][]"\n    },\n    {\n      "type": "string",\n      "name": "word"\n    }\n  ],\n  "return": {\n    "type": "boolean"\n  }\n}',
  },
];
export const HARD = [
  {
    questionId: '2393',
    title: 'Match Substring After Replacement',
    titleSlug: 'match-substring-after-replacement',
    content:
      '<p>You are given two strings <code>s</code> and <code>sub</code>. You are also given a 2D character array <code>mappings</code> where <code>mappings[i] = [old<sub>i</sub>, new<sub>i</sub>]</code> indicates that you may perform the following operation <strong>any</strong> number of times:</p>\n\n<ul>\n\t<li><strong>Replace</strong> a character <code>old<sub>i</sub></code> of <code>sub</code> with <code>new<sub>i</sub></code>.</li>\n</ul>\n\n<p>Each character in <code>sub</code> <strong>cannot</strong> be replaced more than once.</p>\n\n<p>Return <code>true</code><em> if it is possible to make </em><code>sub</code><em> a substring of </em><code>s</code><em> by replacing zero or more characters according to </em><code>mappings</code>. Otherwise, return <code>false</code>.</p>\n\n<p>A <strong>substring</strong> is a contiguous non-empty sequence of characters within a string.</p>\n\n<p>&nbsp;</p>\n<p><strong>Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;fool3e7bar&quot;, sub = &quot;leet&quot;, mappings = [[&quot;e&quot;,&quot;3&quot;],[&quot;t&quot;,&quot;7&quot;],[&quot;t&quot;,&quot;8&quot;]]\n<strong>Output:</strong> true\n<strong>Explanation:</strong> Replace the first &#39;e&#39; in sub with &#39;3&#39; and &#39;t&#39; in sub with &#39;7&#39;.\nNow sub = &quot;l3e7&quot; is a substring of s, so we return true.</pre>\n\n<p><strong>Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;fooleetbar&quot;, sub = &quot;f00l&quot;, mappings = [[&quot;o&quot;,&quot;0&quot;]]\n<strong>Output:</strong> false\n<strong>Explanation:</strong> The string &quot;f00l&quot; is not a substring of s and no replacements can be made.\nNote that we cannot replace &#39;0&#39; with &#39;o&#39;.\n</pre>\n\n<p><strong>Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;Fool33tbaR&quot;, sub = &quot;leetd&quot;, mappings = [[&quot;e&quot;,&quot;3&quot;],[&quot;t&quot;,&quot;7&quot;],[&quot;t&quot;,&quot;8&quot;],[&quot;d&quot;,&quot;b&quot;],[&quot;p&quot;,&quot;b&quot;]]\n<strong>Output:</strong> true\n<strong>Explanation:</strong> Replace the first and second &#39;e&#39; in sub with &#39;3&#39; and &#39;d&#39; in sub with &#39;b&#39;.\nNow sub = &quot;l33tb&quot; is a substring of s, so we return true.\n\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= sub.length &lt;= s.length &lt;= 5000</code></li>\n\t<li><code>0 &lt;= mappings.length &lt;= 1000</code></li>\n\t<li><code>mappings[i].length == 2</code></li>\n\t<li><code>old<sub>i</sub> != new<sub>i</sub></code></li>\n\t<li><code>s</code> and <code>sub</code> consist of uppercase and lowercase English letters and digits.</li>\n\t<li><code>old<sub>i</sub></code> and <code>new<sub>i</sub></code> are either uppercase or lowercase English letters or digits.</li>\n</ul>\n',
    difficulty: 'Hard',
    categoryTitle: 'Algorithms',
    codeSnippets: [
      {
        lang: 'C++',
        langSlug: 'cpp',
        code: 'class Solution {\npublic:\n    bool matchReplacement(string s, string sub, vector<vector<char>>& mappings) {\n        \n    }\n};',
      },
      {
        lang: 'Java',
        langSlug: 'java',
        code: 'class Solution {\n    public boolean matchReplacement(String s, String sub, char[][] mappings) {\n        \n    }\n}',
      },
      {
        lang: 'Python',
        langSlug: 'python',
        code: 'class Solution(object):\n    def matchReplacement(self, s, sub, mappings):\n        """\n        :type s: str\n        :type sub: str\n        :type mappings: List[List[str]]\n        :rtype: bool\n        """\n        ',
      },
      {
        lang: 'Python3',
        langSlug: 'python3',
        code: 'class Solution:\n    def matchReplacement(self, s: str, sub: str, mappings: List[List[str]]) -> bool:\n        ',
      },
      {
        lang: 'C',
        langSlug: 'c',
        code: '\n\nbool matchReplacement(char * s, char * sub, char** mappings, int mappingsSize, int* mappingsColSize){\n\n}',
      },
      {
        lang: 'C#',
        langSlug: 'csharp',
        code: 'public class Solution {\n    public bool MatchReplacement(string s, string sub, char[][] mappings) {\n        \n    }\n}',
      },
      {
        lang: 'JavaScript',
        langSlug: 'javascript',
        code: '/**\n * @param {string} s\n * @param {string} sub\n * @param {character[][]} mappings\n * @return {boolean}\n */\nvar matchReplacement = function(s, sub, mappings) {\n    \n};',
      },
      {
        lang: 'Ruby',
        langSlug: 'ruby',
        code: '# @param {String} s\n# @param {String} sub\n# @param {Character[][]} mappings\n# @return {Boolean}\ndef match_replacement(s, sub, mappings)\n    \nend',
      },
      {
        lang: 'Swift',
        langSlug: 'swift',
        code: 'class Solution {\n    func matchReplacement(_ s: String, _ sub: String, _ mappings: [[Character]]) -> Bool {\n        \n    }\n}',
      },
      {
        lang: 'Go',
        langSlug: 'golang',
        code: 'func matchReplacement(s string, sub string, mappings [][]byte) bool {\n    \n}',
      },
      {
        lang: 'Scala',
        langSlug: 'scala',
        code: 'object Solution {\n    def matchReplacement(s: String, sub: String, mappings: Array[Array[Char]]): Boolean = {\n        \n    }\n}',
      },
      {
        lang: 'Kotlin',
        langSlug: 'kotlin',
        code: 'class Solution {\n    fun matchReplacement(s: String, sub: String, mappings: Array<CharArray>): Boolean {\n        \n    }\n}',
      },
      {
        lang: 'Rust',
        langSlug: 'rust',
        code: 'impl Solution {\n    pub fn match_replacement(s: String, sub: String, mappings: Vec<Vec<char>>) -> bool {\n        \n    }\n}',
      },
      {
        lang: 'PHP',
        langSlug: 'php',
        code: 'class Solution {\n\n    /**\n     * @param String $s\n     * @param String $sub\n     * @param String[][] $mappings\n     * @return Boolean\n     */\n    function matchReplacement($s, $sub, $mappings) {\n        \n    }\n}',
      },
      {
        lang: 'TypeScript',
        langSlug: 'typescript',
        code: 'function matchReplacement(s: string, sub: string, mappings: string[][]): boolean {\n\n};',
      },
      {
        lang: 'Racket',
        langSlug: 'racket',
        code: '(define/contract (match-replacement s sub mappings)\n  (-> string? string? (listof (listof char?)) boolean?)\n\n  )',
      },
      {
        lang: 'Erlang',
        langSlug: 'erlang',
        code: '-spec match_replacement(S :: unicode:unicode_binary(), Sub :: unicode:unicode_binary(), Mappings :: [[char()]]) -> boolean().\nmatch_replacement(S, Sub, Mappings) ->\n  .',
      },
      {
        lang: 'Elixir',
        langSlug: 'elixir',
        code: 'defmodule Solution do\n  @spec match_replacement(s :: String.t, sub :: String.t, mappings :: [[char]]) :: boolean\n  def match_replacement(s, sub, mappings) do\n\n  end\nend',
      },
      {
        lang: 'Dart',
        langSlug: 'dart',
        code: 'class Solution {\n  bool matchReplacement(String s, String sub, List<List<String>> mappings) {\n\n  }\n}',
      },
    ],
    metaData:
      '{\n  "name": "matchReplacement",\n  "params": [\n    {\n      "name": "s",\n      "type": "string"\n    },\n    {\n      "type": "string",\n      "name": "sub"\n    },\n    {\n      "type": "character[][]",\n      "name": "mappings"\n    }\n  ],\n  "return": {\n    "type": "boolean"\n  }\n}',
  },
  {
    questionId: '1424',
    title: 'Maximum Candies You Can Get from Boxes',
    titleSlug: 'maximum-candies-you-can-get-from-boxes',
    content:
      '<p>You have <code>n</code> boxes labeled from <code>0</code> to <code>n - 1</code>. You are given four arrays: <code>status</code>, <code>candies</code>, <code>keys</code>, and <code>containedBoxes</code> where:</p>\n\n<ul>\n\t<li><code>status[i]</code> is <code>1</code> if the <code>i<sup>th</sup></code> box is open and <code>0</code> if the <code>i<sup>th</sup></code> box is closed,</li>\n\t<li><code>candies[i]</code> is the number of candies in the <code>i<sup>th</sup></code> box,</li>\n\t<li><code>keys[i]</code> is a list of the labels of the boxes you can open after opening the <code>i<sup>th</sup></code> box.</li>\n\t<li><code>containedBoxes[i]</code> is a list of the boxes you found inside the <code>i<sup>th</sup></code> box.</li>\n</ul>\n\n<p>You are given an integer array <code>initialBoxes</code> that contains the labels of the boxes you initially have. You can take all the candies in <strong>any open box</strong> and you can use the keys in it to open new boxes and you also can use the boxes you find in it.</p>\n\n<p>Return <em>the maximum number of candies you can get following the rules above</em>.</p>\n\n<p>&nbsp;</p>\n<p><strong>Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> status = [1,0,1,0], candies = [7,5,4,100], keys = [[],[],[1],[]], containedBoxes = [[1,2],[3],[],[]], initialBoxes = [0]\n<strong>Output:</strong> 16\n<strong>Explanation:</strong> You will be initially given box 0. You will find 7 candies in it and boxes 1 and 2.\nBox 1 is closed and you do not have a key for it so you will open box 2. You will find 4 candies and a key to box 1 in box 2.\nIn box 1, you will find 5 candies and box 3 but you will not find a key to box 3 so box 3 will remain closed.\nTotal number of candies collected = 7 + 4 + 5 = 16 candy.\n</pre>\n\n<p><strong>Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> status = [1,0,0,0,0,0], candies = [1,1,1,1,1,1], keys = [[1,2,3,4,5],[],[],[],[],[]], containedBoxes = [[1,2,3,4,5],[],[],[],[],[]], initialBoxes = [0]\n<strong>Output:</strong> 6\n<strong>Explanation:</strong> You have initially box 0. Opening it you can find boxes 1,2,3,4 and 5 and their keys.\nThe total number of candies will be 6.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>n == status.length == candies.length == keys.length == containedBoxes.length</code></li>\n\t<li><code>1 &lt;= n &lt;= 1000</code></li>\n\t<li><code>status[i]</code> is either <code>0</code> or <code>1</code>.</li>\n\t<li><code>1 &lt;= candies[i] &lt;= 1000</code></li>\n\t<li><code>0 &lt;= keys[i].length &lt;= n</code></li>\n\t<li><code>0 &lt;= keys[i][j] &lt; n</code></li>\n\t<li>All values of <code>keys[i]</code> are <strong>unique</strong>.</li>\n\t<li><code>0 &lt;= containedBoxes[i].length &lt;= n</code></li>\n\t<li><code>0 &lt;= containedBoxes[i][j] &lt; n</code></li>\n\t<li>All values of <code>containedBoxes[i]</code> are unique.</li>\n\t<li>Each box is contained in one box at most.</li>\n\t<li><code>0 &lt;= initialBoxes.length &lt;= n</code></li>\n\t<li><code>0 &lt;= initialBoxes[i] &lt; n</code></li>\n</ul>\n',
    difficulty: 'Hard',
    categoryTitle: 'Algorithms',
    codeSnippets: [
      {
        lang: 'C++',
        langSlug: 'cpp',
        code: 'class Solution {\npublic:\n    int maxCandies(vector<int>& status, vector<int>& candies, vector<vector<int>>& keys, vector<vector<int>>& containedBoxes, vector<int>& initialBoxes) {\n        \n    }\n};',
      },
      {
        lang: 'Java',
        langSlug: 'java',
        code: 'class Solution {\n    public int maxCandies(int[] status, int[] candies, int[][] keys, int[][] containedBoxes, int[] initialBoxes) {\n        \n    }\n}',
      },
      {
        lang: 'Python',
        langSlug: 'python',
        code: 'class Solution(object):\n    def maxCandies(self, status, candies, keys, containedBoxes, initialBoxes):\n        """\n        :type status: List[int]\n        :type candies: List[int]\n        :type keys: List[List[int]]\n        :type containedBoxes: List[List[int]]\n        :type initialBoxes: List[int]\n        :rtype: int\n        """\n        ',
      },
      {
        lang: 'Python3',
        langSlug: 'python3',
        code: 'class Solution:\n    def maxCandies(self, status: List[int], candies: List[int], keys: List[List[int]], containedBoxes: List[List[int]], initialBoxes: List[int]) -> int:\n        ',
      },
      {
        lang: 'C',
        langSlug: 'c',
        code: '\n\nint maxCandies(int* status, int statusSize, int* candies, int candiesSize, int** keys, int keysSize, int* keysColSize, int** containedBoxes, int containedBoxesSize, int* containedBoxesColSize, int* initialBoxes, int initialBoxesSize){\n\n}',
      },
      {
        lang: 'C#',
        langSlug: 'csharp',
        code: 'public class Solution {\n    public int MaxCandies(int[] status, int[] candies, int[][] keys, int[][] containedBoxes, int[] initialBoxes) {\n        \n    }\n}',
      },
      {
        lang: 'JavaScript',
        langSlug: 'javascript',
        code: '/**\n * @param {number[]} status\n * @param {number[]} candies\n * @param {number[][]} keys\n * @param {number[][]} containedBoxes\n * @param {number[]} initialBoxes\n * @return {number}\n */\nvar maxCandies = function(status, candies, keys, containedBoxes, initialBoxes) {\n    \n};',
      },
      {
        lang: 'Ruby',
        langSlug: 'ruby',
        code: '# @param {Integer[]} status\n# @param {Integer[]} candies\n# @param {Integer[][]} keys\n# @param {Integer[][]} contained_boxes\n# @param {Integer[]} initial_boxes\n# @return {Integer}\ndef max_candies(status, candies, keys, contained_boxes, initial_boxes)\n    \nend',
      },
      {
        lang: 'Swift',
        langSlug: 'swift',
        code: 'class Solution {\n    func maxCandies(_ status: [Int], _ candies: [Int], _ keys: [[Int]], _ containedBoxes: [[Int]], _ initialBoxes: [Int]) -> Int {\n        \n    }\n}',
      },
      {
        lang: 'Go',
        langSlug: 'golang',
        code: 'func maxCandies(status []int, candies []int, keys [][]int, containedBoxes [][]int, initialBoxes []int) int {\n    \n}',
      },
      {
        lang: 'Scala',
        langSlug: 'scala',
        code: 'object Solution {\n    def maxCandies(status: Array[Int], candies: Array[Int], keys: Array[Array[Int]], containedBoxes: Array[Array[Int]], initialBoxes: Array[Int]): Int = {\n        \n    }\n}',
      },
      {
        lang: 'Kotlin',
        langSlug: 'kotlin',
        code: 'class Solution {\n    fun maxCandies(status: IntArray, candies: IntArray, keys: Array<IntArray>, containedBoxes: Array<IntArray>, initialBoxes: IntArray): Int {\n        \n    }\n}',
      },
      {
        lang: 'Rust',
        langSlug: 'rust',
        code: 'impl Solution {\n    pub fn max_candies(status: Vec<i32>, candies: Vec<i32>, keys: Vec<Vec<i32>>, contained_boxes: Vec<Vec<i32>>, initial_boxes: Vec<i32>) -> i32 {\n        \n    }\n}',
      },
      {
        lang: 'PHP',
        langSlug: 'php',
        code: 'class Solution {\n\n    /**\n     * @param Integer[] $status\n     * @param Integer[] $candies\n     * @param Integer[][] $keys\n     * @param Integer[][] $containedBoxes\n     * @param Integer[] $initialBoxes\n     * @return Integer\n     */\n    function maxCandies($status, $candies, $keys, $containedBoxes, $initialBoxes) {\n        \n    }\n}',
      },
      {
        lang: 'TypeScript',
        langSlug: 'typescript',
        code: 'function maxCandies(status: number[], candies: number[], keys: number[][], containedBoxes: number[][], initialBoxes: number[]): number {\n\n};',
      },
      {
        lang: 'Dart',
        langSlug: 'dart',
        code: 'class Solution {\n  int maxCandies(List<int> status, List<int> candies, List<List<int>> keys, List<List<int>> containedBoxes, List<int> initialBoxes) {\n\n  }\n}',
      },
    ],
    metaData:
      '{\n  "name": "maxCandies",\n  "params": [\n    {\n      "name": "status",\n      "type": "integer[]"\n    },\n    {\n      "type": "integer[]",\n      "name": "candies"\n    },\n    {\n      "type": "integer[][]",\n      "name": "keys"\n    },\n    {\n      "type": "integer[][]",\n      "name": "containedBoxes"\n    },\n    {\n      "type": "integer[]",\n      "name": "initialBoxes"\n    }\n  ],\n  "return": {\n    "type": "integer"\n  }\n}',
  },
  {
    questionId: '2023',
    title: 'Design Movie Rental System',
    titleSlug: 'design-movie-rental-system',
    content:
      '<p>You have a movie renting company consisting of <code>n</code> shops. You want to implement a renting system that supports searching for, booking, and returning movies. The system should also support generating a report of the currently rented movies.</p>\n\n<p>Each movie is given as a 2D integer array <code>entries</code> where <code>entries[i] = [shop<sub>i</sub>, movie<sub>i</sub>, price<sub>i</sub>]</code> indicates that there is a copy of movie <code>movie<sub>i</sub></code> at shop <code>shop<sub>i</sub></code> with a rental price of <code>price<sub>i</sub></code>. Each shop carries <strong>at most one</strong> copy of a movie <code>movie<sub>i</sub></code>.</p>\n\n<p>The system should support the following functions:</p>\n\n<ul>\n\t<li><strong>Search</strong>: Finds the <strong>cheapest 5 shops</strong> that have an <strong>unrented copy</strong> of a given movie. The shops should be sorted by <strong>price</strong> in ascending order, and in case of a tie, the one with the <strong>smaller </strong><code>shop<sub>i</sub></code> should appear first. If there are less than 5 matching shops, then all of them should be returned. If no shop has an unrented copy, then an empty list should be returned.</li>\n\t<li><strong>Rent</strong>: Rents an <strong>unrented copy</strong> of a given movie from a given shop.</li>\n\t<li><strong>Drop</strong>: Drops off a <strong>previously rented copy</strong> of a given movie at a given shop.</li>\n\t<li><strong>Report</strong>: Returns the <strong>cheapest 5 rented movies</strong> (possibly of the same movie ID) as a 2D list <code>res</code> where <code>res[j] = [shop<sub>j</sub>, movie<sub>j</sub>]</code> describes that the <code>j<sup>th</sup></code> cheapest rented movie <code>movie<sub>j</sub></code> was rented from the shop <code>shop<sub>j</sub></code>. The movies in <code>res</code> should be sorted by <strong>price </strong>in ascending order, and in case of a tie, the one with the <strong>smaller </strong><code>shop<sub>j</sub></code> should appear first, and if there is still tie, the one with the <strong>smaller </strong><code>movie<sub>j</sub></code> should appear first. If there are fewer than 5 rented movies, then all of them should be returned. If no movies are currently being rented, then an empty list should be returned.</li>\n</ul>\n\n<p>Implement the <code>MovieRentingSystem</code> class:</p>\n\n<ul>\n\t<li><code>MovieRentingSystem(int n, int[][] entries)</code> Initializes the <code>MovieRentingSystem</code> object with <code>n</code> shops and the movies in <code>entries</code>.</li>\n\t<li><code>List&lt;Integer&gt; search(int movie)</code> Returns a list of shops that have an <strong>unrented copy</strong> of the given <code>movie</code> as described above.</li>\n\t<li><code>void rent(int shop, int movie)</code> Rents the given <code>movie</code> from the given <code>shop</code>.</li>\n\t<li><code>void drop(int shop, int movie)</code> Drops off a previously rented <code>movie</code> at the given <code>shop</code>.</li>\n\t<li><code>List&lt;List&lt;Integer&gt;&gt; report()</code> Returns a list of cheapest <strong>rented</strong> movies as described above.</li>\n</ul>\n\n<p><strong>Note:</strong> The test cases will be generated such that <code>rent</code> will only be called if the shop has an <strong>unrented</strong> copy of the movie, and <code>drop</code> will only be called if the shop had <strong>previously rented</strong> out the movie.</p>\n\n<p>&nbsp;</p>\n<p><strong>Example 1:</strong></p>\n\n<pre>\n<strong>Input</strong>\n[&quot;MovieRentingSystem&quot;, &quot;search&quot;, &quot;rent&quot;, &quot;rent&quot;, &quot;report&quot;, &quot;drop&quot;, &quot;search&quot;]\n[[3, [[0, 1, 5], [0, 2, 6], [0, 3, 7], [1, 1, 4], [1, 2, 7], [2, 1, 5]]], [1], [0, 1], [1, 2], [], [1, 2], [2]]\n<strong>Output</strong>\n[null, [1, 0, 2], null, null, [[0, 1], [1, 2]], null, [0, 1]]\n\n<strong>Explanation</strong>\nMovieRentingSystem movieRentingSystem = new MovieRentingSystem(3, [[0, 1, 5], [0, 2, 6], [0, 3, 7], [1, 1, 4], [1, 2, 7], [2, 1, 5]]);\nmovieRentingSystem.search(1);  // return [1, 0, 2], Movies of ID 1 are unrented at shops 1, 0, and 2. Shop 1 is cheapest; shop 0 and 2 are the same price, so order by shop number.\nmovieRentingSystem.rent(0, 1); // Rent movie 1 from shop 0. Unrented movies at shop 0 are now [2,3].\nmovieRentingSystem.rent(1, 2); // Rent movie 2 from shop 1. Unrented movies at shop 1 are now [1].\nmovieRentingSystem.report();   // return [[0, 1], [1, 2]]. Movie 1 from shop 0 is cheapest, followed by movie 2 from shop 1.\nmovieRentingSystem.drop(1, 2); // Drop off movie 2 at shop 1. Unrented movies at shop 1 are now [1,2].\nmovieRentingSystem.search(2);  // return [0, 1]. Movies of ID 2 are unrented at shops 0 and 1. Shop 0 is cheapest, followed by shop 1.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= n &lt;= 3 * 10<sup>5</sup></code></li>\n\t<li><code>1 &lt;= entries.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>0 &lt;= shop<sub>i</sub> &lt; n</code></li>\n\t<li><code>1 &lt;= movie<sub>i</sub>, price<sub>i</sub> &lt;= 10<sup>4</sup></code></li>\n\t<li>Each shop carries <strong>at most one</strong> copy of a movie <code>movie<sub>i</sub></code>.</li>\n\t<li>At most <code>10<sup>5</sup></code> calls <strong>in total</strong> will be made to <code>search</code>, <code>rent</code>, <code>drop</code> and <code>report</code>.</li>\n</ul>\n',
    difficulty: 'Hard',
    categoryTitle: 'Algorithms',
    codeSnippets: [
      {
        lang: 'C++',
        langSlug: 'cpp',
        code: 'class MovieRentingSystem {\npublic:\n    MovieRentingSystem(int n, vector<vector<int>>& entries) {\n        \n    }\n    \n    vector<int> search(int movie) {\n        \n    }\n    \n    void rent(int shop, int movie) {\n        \n    }\n    \n    void drop(int shop, int movie) {\n        \n    }\n    \n    vector<vector<int>> report() {\n        \n    }\n};\n\n/**\n * Your MovieRentingSystem object will be instantiated and called as such:\n * MovieRentingSystem* obj = new MovieRentingSystem(n, entries);\n * vector<int> param_1 = obj->search(movie);\n * obj->rent(shop,movie);\n * obj->drop(shop,movie);\n * vector<vector<int>> param_4 = obj->report();\n */',
      },
      {
        lang: 'Java',
        langSlug: 'java',
        code: 'class MovieRentingSystem {\n\n    public MovieRentingSystem(int n, int[][] entries) {\n        \n    }\n    \n    public List<Integer> search(int movie) {\n        \n    }\n    \n    public void rent(int shop, int movie) {\n        \n    }\n    \n    public void drop(int shop, int movie) {\n        \n    }\n    \n    public List<List<Integer>> report() {\n        \n    }\n}\n\n/**\n * Your MovieRentingSystem object will be instantiated and called as such:\n * MovieRentingSystem obj = new MovieRentingSystem(n, entries);\n * List<Integer> param_1 = obj.search(movie);\n * obj.rent(shop,movie);\n * obj.drop(shop,movie);\n * List<List<Integer>> param_4 = obj.report();\n */',
      },
      {
        lang: 'Python',
        langSlug: 'python',
        code: 'class MovieRentingSystem(object):\n\n    def __init__(self, n, entries):\n        """\n        :type n: int\n        :type entries: List[List[int]]\n        """\n        \n\n    def search(self, movie):\n        """\n        :type movie: int\n        :rtype: List[int]\n        """\n        \n\n    def rent(self, shop, movie):\n        """\n        :type shop: int\n        :type movie: int\n        :rtype: None\n        """\n        \n\n    def drop(self, shop, movie):\n        """\n        :type shop: int\n        :type movie: int\n        :rtype: None\n        """\n        \n\n    def report(self):\n        """\n        :rtype: List[List[int]]\n        """\n        \n\n\n# Your MovieRentingSystem object will be instantiated and called as such:\n# obj = MovieRentingSystem(n, entries)\n# param_1 = obj.search(movie)\n# obj.rent(shop,movie)\n# obj.drop(shop,movie)\n# param_4 = obj.report()',
      },
      {
        lang: 'Python3',
        langSlug: 'python3',
        code: 'class MovieRentingSystem:\n\n    def __init__(self, n: int, entries: List[List[int]]):\n        \n\n    def search(self, movie: int) -> List[int]:\n        \n\n    def rent(self, shop: int, movie: int) -> None:\n        \n\n    def drop(self, shop: int, movie: int) -> None:\n        \n\n    def report(self) -> List[List[int]]:\n        \n\n\n# Your MovieRentingSystem object will be instantiated and called as such:\n# obj = MovieRentingSystem(n, entries)\n# param_1 = obj.search(movie)\n# obj.rent(shop,movie)\n# obj.drop(shop,movie)\n# param_4 = obj.report()',
      },
      {
        lang: 'C',
        langSlug: 'c',
        code: '\n\n\ntypedef struct {\n    \n} MovieRentingSystem;\n\n\nMovieRentingSystem* movieRentingSystemCreate(int n, int** entries, int entriesSize, int* entriesColSize) {\n    \n}\n\nint* movieRentingSystemSearch(MovieRentingSystem* obj, int movie, int* retSize) {\n  \n}\n\nvoid movieRentingSystemRent(MovieRentingSystem* obj, int shop, int movie) {\n  \n}\n\nvoid movieRentingSystemDrop(MovieRentingSystem* obj, int shop, int movie) {\n  \n}\n\nint** movieRentingSystemReport(MovieRentingSystem* obj, int* retSize, int** retColSize) {\n  \n}\n\nvoid movieRentingSystemFree(MovieRentingSystem* obj) {\n    \n}\n\n/**\n * Your MovieRentingSystem struct will be instantiated and called as such:\n * MovieRentingSystem* obj = movieRentingSystemCreate(n, entries, entriesSize, entriesColSize);\n * int* param_1 = movieRentingSystemSearch(obj, movie, retSize);\n \n * movieRentingSystemRent(obj, shop, movie);\n \n * movieRentingSystemDrop(obj, shop, movie);\n \n * int** param_4 = movieRentingSystemReport(obj, retSize, retColSize);\n \n * movieRentingSystemFree(obj);\n*/',
      },
      {
        lang: 'C#',
        langSlug: 'csharp',
        code: 'public class MovieRentingSystem {\n\n    public MovieRentingSystem(int n, int[][] entries) {\n        \n    }\n    \n    public IList<int> Search(int movie) {\n        \n    }\n    \n    public void Rent(int shop, int movie) {\n        \n    }\n    \n    public void Drop(int shop, int movie) {\n        \n    }\n    \n    public IList<IList<int>> Report() {\n        \n    }\n}\n\n/**\n * Your MovieRentingSystem object will be instantiated and called as such:\n * MovieRentingSystem obj = new MovieRentingSystem(n, entries);\n * IList<int> param_1 = obj.Search(movie);\n * obj.Rent(shop,movie);\n * obj.Drop(shop,movie);\n * IList<IList<int>> param_4 = obj.Report();\n */',
      },
      {
        lang: 'JavaScript',
        langSlug: 'javascript',
        code: '/**\n * @param {number} n\n * @param {number[][]} entries\n */\nvar MovieRentingSystem = function(n, entries) {\n    \n};\n\n/** \n * @param {number} movie\n * @return {number[]}\n */\nMovieRentingSystem.prototype.search = function(movie) {\n    \n};\n\n/** \n * @param {number} shop \n * @param {number} movie\n * @return {void}\n */\nMovieRentingSystem.prototype.rent = function(shop, movie) {\n    \n};\n\n/** \n * @param {number} shop \n * @param {number} movie\n * @return {void}\n */\nMovieRentingSystem.prototype.drop = function(shop, movie) {\n    \n};\n\n/**\n * @return {number[][]}\n */\nMovieRentingSystem.prototype.report = function() {\n    \n};\n\n/** \n * Your MovieRentingSystem object will be instantiated and called as such:\n * var obj = new MovieRentingSystem(n, entries)\n * var param_1 = obj.search(movie)\n * obj.rent(shop,movie)\n * obj.drop(shop,movie)\n * var param_4 = obj.report()\n */',
      },
      {
        lang: 'Ruby',
        langSlug: 'ruby',
        code: 'class MovieRentingSystem\n\n=begin\n    :type n: Integer\n    :type entries: Integer[][]\n=end\n    def initialize(n, entries)\n        \n    end\n\n\n=begin\n    :type movie: Integer\n    :rtype: Integer[]\n=end\n    def search(movie)\n        \n    end\n\n\n=begin\n    :type shop: Integer\n    :type movie: Integer\n    :rtype: Void\n=end\n    def rent(shop, movie)\n        \n    end\n\n\n=begin\n    :type shop: Integer\n    :type movie: Integer\n    :rtype: Void\n=end\n    def drop(shop, movie)\n        \n    end\n\n\n=begin\n    :rtype: Integer[][]\n=end\n    def report()\n        \n    end\n\n\nend\n\n# Your MovieRentingSystem object will be instantiated and called as such:\n# obj = MovieRentingSystem.new(n, entries)\n# param_1 = obj.search(movie)\n# obj.rent(shop, movie)\n# obj.drop(shop, movie)\n# param_4 = obj.report()',
      },
      {
        lang: 'Swift',
        langSlug: 'swift',
        code: '\nclass MovieRentingSystem {\n\n    init(_ n: Int, _ entries: [[Int]]) {\n        \n    }\n    \n    func search(_ movie: Int) -> [Int] {\n        \n    }\n    \n    func rent(_ shop: Int, _ movie: Int) {\n        \n    }\n    \n    func drop(_ shop: Int, _ movie: Int) {\n        \n    }\n    \n    func report() -> [[Int]] {\n        \n    }\n}\n\n/**\n * Your MovieRentingSystem object will be instantiated and called as such:\n * let obj = MovieRentingSystem(n, entries)\n * let ret_1: [Int] = obj.search(movie)\n * obj.rent(shop, movie)\n * obj.drop(shop, movie)\n * let ret_4: [[Int]] = obj.report()\n */',
      },
      {
        lang: 'Go',
        langSlug: 'golang',
        code: 'type MovieRentingSystem struct {\n    \n}\n\n\nfunc Constructor(n int, entries [][]int) MovieRentingSystem {\n    \n}\n\n\nfunc (this *MovieRentingSystem) Search(movie int) []int {\n    \n}\n\n\nfunc (this *MovieRentingSystem) Rent(shop int, movie int)  {\n    \n}\n\n\nfunc (this *MovieRentingSystem) Drop(shop int, movie int)  {\n    \n}\n\n\nfunc (this *MovieRentingSystem) Report() [][]int {\n    \n}\n\n\n/**\n * Your MovieRentingSystem object will be instantiated and called as such:\n * obj := Constructor(n, entries);\n * param_1 := obj.Search(movie);\n * obj.Rent(shop,movie);\n * obj.Drop(shop,movie);\n * param_4 := obj.Report();\n */',
      },
      {
        lang: 'Scala',
        langSlug: 'scala',
        code: 'class MovieRentingSystem(_n: Int, _entries: Array[Array[Int]]) {\n\n    def search(movie: Int): List[Int] = {\n        \n    }\n\n    def rent(shop: Int, movie: Int) {\n        \n    }\n\n    def drop(shop: Int, movie: Int) {\n        \n    }\n\n    def report(): List[List[Int]] = {\n        \n    }\n\n}\n\n/**\n * Your MovieRentingSystem object will be instantiated and called as such:\n * var obj = new MovieRentingSystem(n, entries)\n * var param_1 = obj.search(movie)\n * obj.rent(shop,movie)\n * obj.drop(shop,movie)\n * var param_4 = obj.report()\n */',
      },
      {
        lang: 'Kotlin',
        langSlug: 'kotlin',
        code: 'class MovieRentingSystem(n: Int, entries: Array<IntArray>) {\n\n    fun search(movie: Int): List<Int> {\n        \n    }\n\n    fun rent(shop: Int, movie: Int) {\n        \n    }\n\n    fun drop(shop: Int, movie: Int) {\n        \n    }\n\n    fun report(): List<List<Int>> {\n        \n    }\n\n}\n\n/**\n * Your MovieRentingSystem object will be instantiated and called as such:\n * var obj = MovieRentingSystem(n, entries)\n * var param_1 = obj.search(movie)\n * obj.rent(shop,movie)\n * obj.drop(shop,movie)\n * var param_4 = obj.report()\n */',
      },
      {
        lang: 'Rust',
        langSlug: 'rust',
        code: 'struct MovieRentingSystem {\n\n}\n\n\n/** \n * `&self` means the method takes an immutable reference.\n * If you need a mutable reference, change it to `&mut self` instead.\n */\nimpl MovieRentingSystem {\n\n    fn new(n: i32, entries: Vec<Vec<i32>>) -> Self {\n        \n    }\n    \n    fn search(&self, movie: i32) -> Vec<i32> {\n        \n    }\n    \n    fn rent(&self, shop: i32, movie: i32) {\n        \n    }\n    \n    fn drop(&self, shop: i32, movie: i32) {\n        \n    }\n    \n    fn report(&self) -> Vec<Vec<i32>> {\n        \n    }\n}\n\n/**\n * Your MovieRentingSystem object will be instantiated and called as such:\n * let obj = MovieRentingSystem::new(n, entries);\n * let ret_1: Vec<i32> = obj.search(movie);\n * obj.rent(shop, movie);\n * obj.drop(shop, movie);\n * let ret_4: Vec<Vec<i32>> = obj.report();\n */',
      },
      {
        lang: 'PHP',
        langSlug: 'php',
        code: 'class MovieRentingSystem {\n    /**\n     * @param Integer $n\n     * @param Integer[][] $entries\n     */\n    function __construct($n, $entries) {\n        \n    }\n  \n    /**\n     * @param Integer $movie\n     * @return Integer[]\n     */\n    function search($movie) {\n        \n    }\n  \n    /**\n     * @param Integer $shop\n     * @param Integer $movie\n     * @return NULL\n     */\n    function rent($shop, $movie) {\n        \n    }\n  \n    /**\n     * @param Integer $shop\n     * @param Integer $movie\n     * @return NULL\n     */\n    function drop($shop, $movie) {\n        \n    }\n  \n    /**\n     * @return Integer[][]\n     */\n    function report() {\n        \n    }\n}\n\n/**\n * Your MovieRentingSystem object will be instantiated and called as such:\n * $obj = MovieRentingSystem($n, $entries);\n * $ret_1 = $obj->search($movie);\n * $obj->rent($shop, $movie);\n * $obj->drop($shop, $movie);\n * $ret_4 = $obj->report();\n */',
      },
      {
        lang: 'TypeScript',
        langSlug: 'typescript',
        code: 'class MovieRentingSystem {\n    constructor(n: number, entries: number[][]) {\n\n    }\n\n    search(movie: number): number[] {\n\n    }\n\n    rent(shop: number, movie: number): void {\n\n    }\n\n    drop(shop: number, movie: number): void {\n\n    }\n\n    report(): number[][] {\n\n    }\n}\n\n/**\n * Your MovieRentingSystem object will be instantiated and called as such:\n * var obj = new MovieRentingSystem(n, entries)\n * var param_1 = obj.search(movie)\n * obj.rent(shop,movie)\n * obj.drop(shop,movie)\n * var param_4 = obj.report()\n */',
      },
      {
        lang: 'Racket',
        langSlug: 'racket',
        code: '(define movie-renting-system%\n  (class object%\n    (super-new)\n\n    ; n : exact-integer?\n\n    ; entries : (listof (listof exact-integer?))\n    (init-field\n      n\n      entries)\n    \n    ; search : exact-integer? -> (listof exact-integer?)\n    (define/public (search movie)\n\n      )\n    ; rent : exact-integer? exact-integer? -> void?\n    (define/public (rent shop movie)\n\n      )\n    ; drop : exact-integer? exact-integer? -> void?\n    (define/public (drop shop movie)\n\n      )\n    ; report : -> (listof (listof exact-integer?))\n    (define/public (report)\n\n      )))\n\n;; Your movie-renting-system% object will be instantiated and called as such:\n;; (define obj (new movie-renting-system% [n n] [entries entries]))\n;; (define param_1 (send obj search movie))\n;; (send obj rent shop movie)\n;; (send obj drop shop movie)\n;; (define param_4 (send obj report))',
      },
      {
        lang: 'Dart',
        langSlug: 'dart',
        code: 'class MovieRentingSystem {\n\n  MovieRentingSystem(int n, List<List<int>> entries) {\n\n  }\n  \n  List<int> search(int movie) {\n\n  }\n  \n  void rent(int shop, int movie) {\n\n  }\n  \n  void drop(int shop, int movie) {\n\n  }\n  \n  List<List<int>> report() {\n\n  }\n}\n\n/**\n * Your MovieRentingSystem object will be instantiated and called as such:\n * MovieRentingSystem obj = MovieRentingSystem(n, entries);\n * List<int> param1 = obj.search(movie);\n * obj.rent(shop,movie);\n * obj.drop(shop,movie);\n * List<List<int>> param4 = obj.report();\n */',
      },
    ],
    metaData:
      '{\n  "classname": "MovieRentingSystem",\n  "constructor": {\n    "params": [\n      {\n        "type": "integer",\n        "name": "n"\n      },\n      {\n        "name": "entries",\n        "type": "integer[][]"\n      }\n    ]\n  },\n  "methods": [\n    {\n      "params": [\n        {\n          "type": "integer",\n          "name": "movie"\n        }\n      ],\n      "name": "search",\n      "return": {\n        "type": "list<integer>"\n      }\n    },\n    {\n      "params": [\n        {\n          "type": "integer",\n          "name": "shop"\n        },\n        {\n          "type": "integer",\n          "name": "movie"\n        }\n      ],\n      "name": "rent",\n      "return": {\n        "type": "void"\n      }\n    },\n    {\n      "params": [\n        {\n          "type": "integer",\n          "name": "shop"\n        },\n        {\n          "type": "integer",\n          "name": "movie"\n        }\n      ],\n      "name": "drop",\n      "return": {\n        "type": "void"\n      }\n    },\n    {\n      "params": [],\n      "name": "report",\n      "return": {\n        "type": "list<list<integer>>"\n      }\n    }\n  ],\n  "return": {\n    "type": "boolean"\n  },\n  "systemdesign": true,\n  "manual": false\n}',
  },
  {
    questionId: '1644',
    title: 'Maximum Number of Non-Overlapping Substrings',
    titleSlug: 'maximum-number-of-non-overlapping-substrings',
    content:
      '<p>Given a string <code>s</code> of lowercase letters, you need to find the maximum number of <strong>non-empty</strong> substrings of <code>s</code> that meet the following conditions:</p>\n\n<ol>\n\t<li>The substrings do not overlap, that is for any two substrings <code>s[i..j]</code> and <code>s[x..y]</code>, either <code>j &lt; x</code> or <code>i &gt; y</code> is true.</li>\n\t<li>A substring that contains a certain character <code>c</code> must also contain all occurrences of <code>c</code>.</li>\n</ol>\n\n<p>Find <em>the maximum number of substrings that meet the above conditions</em>. If there are multiple solutions with the same number of substrings, <em>return the one with minimum total length. </em>It can be shown that there exists a unique solution of minimum total length.</p>\n\n<p>Notice that you can return the substrings in <strong>any</strong> order.</p>\n\n<p>&nbsp;</p>\n<p><strong>Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;adefaddaccc&quot;\n<strong>Output:</strong> [&quot;e&quot;,&quot;f&quot;,&quot;ccc&quot;]\n<b>Explanation:</b>&nbsp;The following are all the possible substrings that meet the conditions:\n[\n&nbsp; &quot;adefaddaccc&quot;\n&nbsp; &quot;adefadda&quot;,\n&nbsp; &quot;ef&quot;,\n&nbsp; &quot;e&quot;,\n  &quot;f&quot;,\n&nbsp; &quot;ccc&quot;,\n]\nIf we choose the first string, we cannot choose anything else and we&#39;d get only 1. If we choose &quot;adefadda&quot;, we are left with &quot;ccc&quot; which is the only one that doesn&#39;t overlap, thus obtaining 2 substrings. Notice also, that it&#39;s not optimal to choose &quot;ef&quot; since it can be split into two. Therefore, the optimal way is to choose [&quot;e&quot;,&quot;f&quot;,&quot;ccc&quot;] which gives us 3 substrings. No other solution of the same number of substrings exist.\n</pre>\n\n<p><strong>Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> s = &quot;abbaccd&quot;\n<strong>Output:</strong> [&quot;d&quot;,&quot;bb&quot;,&quot;cc&quot;]\n<b>Explanation: </b>Notice that while the set of substrings [&quot;d&quot;,&quot;abba&quot;,&quot;cc&quot;] also has length 3, it&#39;s considered incorrect since it has larger total length.\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li>\n\t<li><code>s</code> contains only lowercase English letters.</li>\n</ul>\n',
    difficulty: 'Hard',
    categoryTitle: 'Algorithms',
    codeSnippets: [
      {
        lang: 'C++',
        langSlug: 'cpp',
        code: 'class Solution {\npublic:\n    vector<string> maxNumOfSubstrings(string s) {\n        \n    }\n};',
      },
      {
        lang: 'Java',
        langSlug: 'java',
        code: 'class Solution {\n    public List<String> maxNumOfSubstrings(String s) {\n        \n    }\n}',
      },
      {
        lang: 'Python',
        langSlug: 'python',
        code: 'class Solution(object):\n    def maxNumOfSubstrings(self, s):\n        """\n        :type s: str\n        :rtype: List[str]\n        """\n        ',
      },
      {
        lang: 'Python3',
        langSlug: 'python3',
        code: 'class Solution:\n    def maxNumOfSubstrings(self, s: str) -> List[str]:\n        ',
      },
      {
        lang: 'C',
        langSlug: 'c',
        code: '\n\n/**\n * Note: The returned array must be malloced, assume caller calls free().\n */\nchar ** maxNumOfSubstrings(char * s, int* returnSize){\n\n}',
      },
      {
        lang: 'C#',
        langSlug: 'csharp',
        code: 'public class Solution {\n    public IList<string> MaxNumOfSubstrings(string s) {\n        \n    }\n}',
      },
      {
        lang: 'JavaScript',
        langSlug: 'javascript',
        code: '/**\n * @param {string} s\n * @return {string[]}\n */\nvar maxNumOfSubstrings = function(s) {\n    \n};',
      },
      {
        lang: 'Ruby',
        langSlug: 'ruby',
        code: '# @param {String} s\n# @return {String[]}\ndef max_num_of_substrings(s)\n    \nend',
      },
      {
        lang: 'Swift',
        langSlug: 'swift',
        code: 'class Solution {\n    func maxNumOfSubstrings(_ s: String) -> [String] {\n        \n    }\n}',
      },
      {
        lang: 'Go',
        langSlug: 'golang',
        code: 'func maxNumOfSubstrings(s string) []string {\n    \n}',
      },
      {
        lang: 'Scala',
        langSlug: 'scala',
        code: 'object Solution {\n    def maxNumOfSubstrings(s: String): List[String] = {\n        \n    }\n}',
      },
      {
        lang: 'Kotlin',
        langSlug: 'kotlin',
        code: 'class Solution {\n    fun maxNumOfSubstrings(s: String): List<String> {\n        \n    }\n}',
      },
      {
        lang: 'Rust',
        langSlug: 'rust',
        code: 'impl Solution {\n    pub fn max_num_of_substrings(s: String) -> Vec<String> {\n        \n    }\n}',
      },
      {
        lang: 'PHP',
        langSlug: 'php',
        code: 'class Solution {\n\n    /**\n     * @param String $s\n     * @return String[]\n     */\n    function maxNumOfSubstrings($s) {\n        \n    }\n}',
      },
      {
        lang: 'TypeScript',
        langSlug: 'typescript',
        code: 'function maxNumOfSubstrings(s: string): string[] {\n\n};',
      },
      {
        lang: 'Racket',
        langSlug: 'racket',
        code: '(define/contract (max-num-of-substrings s)\n  (-> string? (listof string?))\n\n  )',
      },
      {
        lang: 'Erlang',
        langSlug: 'erlang',
        code: '-spec max_num_of_substrings(S :: unicode:unicode_binary()) -> [unicode:unicode_binary()].\nmax_num_of_substrings(S) ->\n  .',
      },
      {
        lang: 'Elixir',
        langSlug: 'elixir',
        code: 'defmodule Solution do\n  @spec max_num_of_substrings(s :: String.t) :: [String.t]\n  def max_num_of_substrings(s) do\n\n  end\nend',
      },
      {
        lang: 'Dart',
        langSlug: 'dart',
        code: 'class Solution {\n  List<String> maxNumOfSubstrings(String s) {\n\n  }\n}',
      },
    ],
    metaData:
      '{\n  "name": "maxNumOfSubstrings",\n  "params": [\n    {\n      "name": "s",\n      "type": "string"\n    }\n  ],\n  "return": {\n    "type": "list<string>"\n  }\n}',
  },
  {
    questionId: '460',
    title: 'LFU Cache',
    titleSlug: 'lfu-cache',
    content:
      '<p>Design and implement a data structure for a <a href="https://en.wikipedia.org/wiki/Least_frequently_used" target="_blank">Least Frequently Used (LFU)</a> cache.</p>\n\n<p>Implement the <code>LFUCache</code> class:</p>\n\n<ul>\n\t<li><code>LFUCache(int capacity)</code> Initializes the object with the <code>capacity</code> of the data structure.</li>\n\t<li><code>int get(int key)</code> Gets the value of the <code>key</code> if the <code>key</code> exists in the cache. Otherwise, returns <code>-1</code>.</li>\n\t<li><code>void put(int key, int value)</code> Update the value of the <code>key</code> if present, or inserts the <code>key</code> if not already present. When the cache reaches its <code>capacity</code>, it should invalidate and remove the <strong>least frequently used</strong> key before inserting a new item. For this problem, when there is a <strong>tie</strong> (i.e., two or more keys with the same frequency), the <strong>least recently used</strong> <code>key</code> would be invalidated.</li>\n</ul>\n\n<p>To determine the least frequently used key, a <strong>use counter</strong> is maintained for each key in the cache. The key with the smallest <strong>use counter</strong> is the least frequently used key.</p>\n\n<p>When a key is first inserted into the cache, its <strong>use counter</strong> is set to <code>1</code> (due to the <code>put</code> operation). The <strong>use counter</strong> for a key in the cache is incremented either a <code>get</code> or <code>put</code> operation is called on it.</p>\n\n<p>The functions&nbsp;<code data-stringify-type="code">get</code>&nbsp;and&nbsp;<code data-stringify-type="code">put</code>&nbsp;must each run in <code>O(1)</code> average time complexity.</p>\n\n<p>&nbsp;</p>\n<p><strong>Example 1:</strong></p>\n\n<pre>\n<strong>Input</strong>\n[&quot;LFUCache&quot;, &quot;put&quot;, &quot;put&quot;, &quot;get&quot;, &quot;put&quot;, &quot;get&quot;, &quot;get&quot;, &quot;put&quot;, &quot;get&quot;, &quot;get&quot;, &quot;get&quot;]\n[[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]\n<strong>Output</strong>\n[null, null, null, 1, null, -1, 3, null, -1, 3, 4]\n\n<strong>Explanation</strong>\n// cnt(x) = the use counter for key x\n// cache=[] will show the last used order for tiebreakers (leftmost element is  most recent)\nLFUCache lfu = new LFUCache(2);\nlfu.put(1, 1);   // cache=[1,_], cnt(1)=1\nlfu.put(2, 2);   // cache=[2,1], cnt(2)=1, cnt(1)=1\nlfu.get(1);      // return 1\n                 // cache=[1,2], cnt(2)=1, cnt(1)=2\nlfu.put(3, 3);   // 2 is the LFU key because cnt(2)=1 is the smallest, invalidate 2.\n&nbsp;                // cache=[3,1], cnt(3)=1, cnt(1)=2\nlfu.get(2);      // return -1 (not found)\nlfu.get(3);      // return 3\n                 // cache=[3,1], cnt(3)=2, cnt(1)=2\nlfu.put(4, 4);   // Both 1 and 3 have the same cnt, but 1 is LRU, invalidate 1.\n                 // cache=[4,3], cnt(4)=1, cnt(3)=2\nlfu.get(1);      // return -1 (not found)\nlfu.get(3);      // return 3\n                 // cache=[3,4], cnt(4)=1, cnt(3)=3\nlfu.get(4);      // return 4\n                 // cache=[4,3], cnt(4)=2, cnt(3)=3\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>0 &lt;= capacity&nbsp;&lt;= 10<sup>4</sup></code></li>\n\t<li><code>0 &lt;= key &lt;= 10<sup>5</sup></code></li>\n\t<li><code>0 &lt;= value &lt;= 10<sup>9</sup></code></li>\n\t<li>At most <code>2 * 10<sup>5</sup></code>&nbsp;calls will be made to <code>get</code> and <code>put</code>.</li>\n</ul>\n\n<p>&nbsp;</p>\n<span style="display: none;">&nbsp;</span>',
    difficulty: 'Hard',
    categoryTitle: 'Algorithms',
    codeSnippets: [
      {
        lang: 'C++',
        langSlug: 'cpp',
        code: 'class LFUCache {\npublic:\n    LFUCache(int capacity) {\n        \n    }\n    \n    int get(int key) {\n        \n    }\n    \n    void put(int key, int value) {\n        \n    }\n};\n\n/**\n * Your LFUCache object will be instantiated and called as such:\n * LFUCache* obj = new LFUCache(capacity);\n * int param_1 = obj->get(key);\n * obj->put(key,value);\n */',
      },
      {
        lang: 'Java',
        langSlug: 'java',
        code: 'class LFUCache {\n\n    public LFUCache(int capacity) {\n        \n    }\n    \n    public int get(int key) {\n        \n    }\n    \n    public void put(int key, int value) {\n        \n    }\n}\n\n/**\n * Your LFUCache object will be instantiated and called as such:\n * LFUCache obj = new LFUCache(capacity);\n * int param_1 = obj.get(key);\n * obj.put(key,value);\n */',
      },
      {
        lang: 'Python',
        langSlug: 'python',
        code: 'class LFUCache(object):\n\n    def __init__(self, capacity):\n        """\n        :type capacity: int\n        """\n        \n\n    def get(self, key):\n        """\n        :type key: int\n        :rtype: int\n        """\n        \n\n    def put(self, key, value):\n        """\n        :type key: int\n        :type value: int\n        :rtype: None\n        """\n        \n\n\n# Your LFUCache object will be instantiated and called as such:\n# obj = LFUCache(capacity)\n# param_1 = obj.get(key)\n# obj.put(key,value)',
      },
      {
        lang: 'Python3',
        langSlug: 'python3',
        code: 'class LFUCache:\n\n    def __init__(self, capacity: int):\n        \n\n    def get(self, key: int) -> int:\n        \n\n    def put(self, key: int, value: int) -> None:\n        \n\n\n# Your LFUCache object will be instantiated and called as such:\n# obj = LFUCache(capacity)\n# param_1 = obj.get(key)\n# obj.put(key,value)',
      },
      {
        lang: 'C',
        langSlug: 'c',
        code: '\n\n\ntypedef struct {\n    \n} LFUCache;\n\n\nLFUCache* lFUCacheCreate(int capacity) {\n    \n}\n\nint lFUCacheGet(LFUCache* obj, int key) {\n  \n}\n\nvoid lFUCachePut(LFUCache* obj, int key, int value) {\n  \n}\n\nvoid lFUCacheFree(LFUCache* obj) {\n    \n}\n\n/**\n * Your LFUCache struct will be instantiated and called as such:\n * LFUCache* obj = lFUCacheCreate(capacity);\n * int param_1 = lFUCacheGet(obj, key);\n \n * lFUCachePut(obj, key, value);\n \n * lFUCacheFree(obj);\n*/',
      },
      {
        lang: 'C#',
        langSlug: 'csharp',
        code: 'public class LFUCache {\n\n    public LFUCache(int capacity) {\n        \n    }\n    \n    public int Get(int key) {\n        \n    }\n    \n    public void Put(int key, int value) {\n        \n    }\n}\n\n/**\n * Your LFUCache object will be instantiated and called as such:\n * LFUCache obj = new LFUCache(capacity);\n * int param_1 = obj.Get(key);\n * obj.Put(key,value);\n */',
      },
      {
        lang: 'JavaScript',
        langSlug: 'javascript',
        code: '/**\n * @param {number} capacity\n */\nvar LFUCache = function(capacity) {\n    \n};\n\n/** \n * @param {number} key\n * @return {number}\n */\nLFUCache.prototype.get = function(key) {\n    \n};\n\n/** \n * @param {number} key \n * @param {number} value\n * @return {void}\n */\nLFUCache.prototype.put = function(key, value) {\n    \n};\n\n/** \n * Your LFUCache object will be instantiated and called as such:\n * var obj = new LFUCache(capacity)\n * var param_1 = obj.get(key)\n * obj.put(key,value)\n */',
      },
      {
        lang: 'Ruby',
        langSlug: 'ruby',
        code: 'class LFUCache\n\n=begin\n    :type capacity: Integer\n=end\n    def initialize(capacity)\n        \n    end\n\n\n=begin\n    :type key: Integer\n    :rtype: Integer\n=end\n    def get(key)\n        \n    end\n\n\n=begin\n    :type key: Integer\n    :type value: Integer\n    :rtype: Void\n=end\n    def put(key, value)\n        \n    end\n\n\nend\n\n# Your LFUCache object will be instantiated and called as such:\n# obj = LFUCache.new(capacity)\n# param_1 = obj.get(key)\n# obj.put(key, value)',
      },
      {
        lang: 'Swift',
        langSlug: 'swift',
        code: '\nclass LFUCache {\n\n    init(_ capacity: Int) {\n        \n    }\n    \n    func get(_ key: Int) -> Int {\n        \n    }\n    \n    func put(_ key: Int, _ value: Int) {\n        \n    }\n}\n\n/**\n * Your LFUCache object will be instantiated and called as such:\n * let obj = LFUCache(capacity)\n * let ret_1: Int = obj.get(key)\n * obj.put(key, value)\n */',
      },
      {
        lang: 'Go',
        langSlug: 'golang',
        code: 'type LFUCache struct {\n    \n}\n\n\nfunc Constructor(capacity int) LFUCache {\n    \n}\n\n\nfunc (this *LFUCache) Get(key int) int {\n    \n}\n\n\nfunc (this *LFUCache) Put(key int, value int)  {\n    \n}\n\n\n/**\n * Your LFUCache object will be instantiated and called as such:\n * obj := Constructor(capacity);\n * param_1 := obj.Get(key);\n * obj.Put(key,value);\n */',
      },
      {
        lang: 'Scala',
        langSlug: 'scala',
        code: 'class LFUCache(_capacity: Int) {\n\n    def get(key: Int): Int = {\n        \n    }\n\n    def put(key: Int, value: Int) {\n        \n    }\n\n}\n\n/**\n * Your LFUCache object will be instantiated and called as such:\n * var obj = new LFUCache(capacity)\n * var param_1 = obj.get(key)\n * obj.put(key,value)\n */',
      },
      {
        lang: 'Kotlin',
        langSlug: 'kotlin',
        code: 'class LFUCache(capacity: Int) {\n\n    fun get(key: Int): Int {\n        \n    }\n\n    fun put(key: Int, value: Int) {\n        \n    }\n\n}\n\n/**\n * Your LFUCache object will be instantiated and called as such:\n * var obj = LFUCache(capacity)\n * var param_1 = obj.get(key)\n * obj.put(key,value)\n */',
      },
      {
        lang: 'Rust',
        langSlug: 'rust',
        code: 'struct LFUCache {\n\n}\n\n\n/** \n * `&self` means the method takes an immutable reference.\n * If you need a mutable reference, change it to `&mut self` instead.\n */\nimpl LFUCache {\n\n    fn new(capacity: i32) -> Self {\n        \n    }\n    \n    fn get(&self, key: i32) -> i32 {\n        \n    }\n    \n    fn put(&self, key: i32, value: i32) {\n        \n    }\n}\n\n/**\n * Your LFUCache object will be instantiated and called as such:\n * let obj = LFUCache::new(capacity);\n * let ret_1: i32 = obj.get(key);\n * obj.put(key, value);\n */',
      },
      {
        lang: 'PHP',
        langSlug: 'php',
        code: 'class LFUCache {\n    /**\n     * @param Integer $capacity\n     */\n    function __construct($capacity) {\n        \n    }\n  \n    /**\n     * @param Integer $key\n     * @return Integer\n     */\n    function get($key) {\n        \n    }\n  \n    /**\n     * @param Integer $key\n     * @param Integer $value\n     * @return NULL\n     */\n    function put($key, $value) {\n        \n    }\n}\n\n/**\n * Your LFUCache object will be instantiated and called as such:\n * $obj = LFUCache($capacity);\n * $ret_1 = $obj->get($key);\n * $obj->put($key, $value);\n */',
      },
      {
        lang: 'TypeScript',
        langSlug: 'typescript',
        code: 'class LFUCache {\n    constructor(capacity: number) {\n\n    }\n\n    get(key: number): number {\n\n    }\n\n    put(key: number, value: number): void {\n\n    }\n}\n\n/**\n * Your LFUCache object will be instantiated and called as such:\n * var obj = new LFUCache(capacity)\n * var param_1 = obj.get(key)\n * obj.put(key,value)\n */',
      },
      {
        lang: 'Racket',
        langSlug: 'racket',
        code: '(define lfu-cache%\n  (class object%\n    (super-new)\n\n    ; capacity : exact-integer?\n    (init-field\n      capacity)\n    \n    ; get : exact-integer? -> exact-integer?\n    (define/public (get key)\n\n      )\n    ; put : exact-integer? exact-integer? -> void?\n    (define/public (put key value)\n\n      )))\n\n;; Your lfu-cache% object will be instantiated and called as such:\n;; (define obj (new lfu-cache% [capacity capacity]))\n;; (define param_1 (send obj get key))\n;; (send obj put key value)',
      },
      {
        lang: 'Erlang',
        langSlug: 'erlang',
        code: '-spec lfu_cache_init_(Capacity :: integer()) -> any().\nlfu_cache_init_(Capacity) ->\n  .\n\n-spec lfu_cache_get(Key :: integer()) -> integer().\nlfu_cache_get(Key) ->\n  .\n\n-spec lfu_cache_put(Key :: integer(), Value :: integer()) -> any().\nlfu_cache_put(Key, Value) ->\n  .\n\n\n%% Your functions will be called as such:\n%% lfu_cache_init_(Capacity),\n%% Param_1 = lfu_cache_get(Key),\n%% lfu_cache_put(Key, Value),\n\n%% lfu_cache_init_ will be called before every test case, in which you can do some necessary initializations.',
      },
      {
        lang: 'Elixir',
        langSlug: 'elixir',
        code: 'defmodule LFUCache do\n  @spec init_(capacity :: integer) :: any\n  def init_(capacity) do\n\n  end\n\n  @spec get(key :: integer) :: integer\n  def get(key) do\n\n  end\n\n  @spec put(key :: integer, value :: integer) :: any\n  def put(key, value) do\n\n  end\nend\n\n# Your functions will be called as such:\n# LFUCache.init_(capacity)\n# param_1 = LFUCache.get(key)\n# LFUCache.put(key, value)\n\n# LFUCache.init_ will be called before every test case, in which you can do some necessary initializations.',
      },
      {
        lang: 'Dart',
        langSlug: 'dart',
        code: 'class LFUCache {\n\n  LFUCache(int capacity) {\n\n  }\n  \n  int get(int key) {\n\n  }\n  \n  void put(int key, int value) {\n\n  }\n}\n\n/**\n * Your LFUCache object will be instantiated and called as such:\n * LFUCache obj = LFUCache(capacity);\n * int param1 = obj.get(key);\n * obj.put(key,value);\n */',
      },
    ],
    metaData:
      '{\r\n    "classname": "LFUCache",\r\n    "maxbytesperline": 200000,\r\n    "constructor": {\r\n        "params": [\r\n            {\r\n                "type": "integer",\r\n                "name": "capacity"\r\n            }\r\n        ]\r\n    },\r\n    "methods": [\r\n        {\r\n            "name" : "get",\r\n            "params": [\r\n                {\r\n                    "type": "integer",\r\n                    "name": "key"\r\n                }\r\n            ],\r\n            "return": {\r\n                "type": "integer"\r\n            }\r\n        },\r\n        {\r\n            "name" : "put",\r\n            "params": [\r\n                {\r\n                    "type": "integer",\r\n                    "name": "key"\r\n                },\r\n                {\r\n                    "type": "integer",\r\n                    "name": "value"\r\n                }\r\n            ],\r\n            "return": {\r\n                "type": "void"\r\n            }\r\n        }\r\n    ],\r\n    "systemdesign": true,\r\n    "params": [\r\n        {\r\n            "name": "inputs",\r\n            "type": "integer[]"\r\n        },\r\n        {\r\n            "name": "inputs",\r\n            "type": "integer[]"\r\n        }\r\n    ],\r\n    "return": {\r\n        "type": "list<String>",\r\n        "dealloc": true\r\n    }\r\n}',
  },
];

const questions: Record<QuestionDifficulty, LeetCodeInfo[]> = {
  EASY,
  MEDIUM,
  HARD,
};

export default questions;
