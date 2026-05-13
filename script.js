const questionsData = [
    {
        order: 1, category: "Hash Map", id: 1, title: "Two Sum", difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/two-sum/",
        englishDesc: "Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>.",
        fullEnglishDesc: `You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice. You can return the answer in any order.<br><br><strong>Example:</strong><br><pre>Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]</pre><strong>Constraints:</strong><ul><li>2 <= nums.length <= 10^4</li><li>-10^9 <= nums[i] <= 10^9</li></ul>`,
        coreConcept: "用 Hash Map 記錄「目標值減去當前值」，邊走邊查。",
        thoughtProcess: ["目標是找兩數之和，雙層迴圈會太慢 O(n²)。", "建立空字典 dict 存 [數字: Index]。", "計算 diff = target - 當前數字。", "若 diff 在字典裡，直接回傳兩個 Index。", "不在就把當前數字和 Index 存入備用。"],
        variations: "😈 變形考題：如果陣列已經排好序呢？👉 請改用 Two Pointers (左右夾擠) 把空間降到 O(1)！",
        complexity: { time: "O(n)", space: "O(n)" },
        script: "「為了優化時間，我會使用 Hash Map 空間換取時間，在遍歷陣列時紀錄需要的差值，這樣只要走訪一次就能找到答案。」",
        code: `func twoSum(_ nums: [Int], _ target: Int) -> [Int] {\n    var dict = [Int: Int]()\n    for (i, num) in nums.enumerated() {\n        if let matchIndex = dict[target - num] { return [matchIndex, i] }\n        dict[num] = i\n    }\n    return []\n}`
    },
    {
        order: 2, category: "Hash Map", id: 217, title: "Contains Duplicate", difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/contains-duplicate/",
        englishDesc: "Given an integer array <code>nums</code>, return <code>true</code> if any value appears at least twice in the array, and return <code>false</code> if every element is distinct.",
        fullEnglishDesc: `<strong>Example 1:</strong><br><pre>Input: nums = [1,2,3,1]\nOutput: true</pre><strong>Constraints:</strong><ul><li>1 <= nums.length <= 10^5</li><li>-10^9 <= nums[i] <= 10^9</li></ul>`,
        coreConcept: "利用 Set 的唯一性來判斷陣列中有沒有重複的數字。",
        thoughtProcess: ["要找重複，最直覺是用 Set。", "建立一個空 Set，邊走訪邊 insert。", "如果 insert 前發現 Set.contains()，提早 return true。"],
        variations: "😈 變形考題：如果不准用額外空間 (Space O(1))？👉 先把陣列排序 O(n log n)，然後檢查相鄰數字是否一樣。",
        complexity: { time: "O(n)", space: "O(n)" },
        script: "「最快且最簡潔的方法是將 Array 轉成 Set 比較長度。但在面試中為了展現提早結束 (early return) 的概念，我會用迴圈搭配 Set 來實作。」",
        code: `func containsDuplicate(_ nums: [Int]) -> Bool {\n    var seen = Set<Int>()\n    for num in nums {\n        if seen.contains(num) { return true }\n        seen.insert(num)\n    }\n    return false\n}`
    },
    {
        order: 3, category: "Hash Map", id: 242, title: "Valid Anagram", difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/valid-anagram/",
        englishDesc: "Given two strings <code>s</code> and <code>t</code>, return <code>true</code> if <code>t</code> is an anagram of <code>s</code>, and <code>false</code> otherwise.",
        fullEnglishDesc: `An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.<br><br><strong>Example 1:</strong><br><pre>Input: s = "anagram", t = "nagaram"\nOutput: true</pre>`,
        coreConcept: "用字典計算字母出現次數，第一個字串增加次數，第二個字串抵銷次數。",
        thoughtProcess: ["先檢查長度，字數不一致絕對不是 Anagram。", "建立一個字典 lookup = {}。", "走訪第一個字串 s：如果字母不在字典，設為 1 (只出現一次)；如果已在，次數 +1 (更新出現幾次)。", "走訪第二個字串 t：如果字母不在字典，或抵銷時發現次數不夠減，代表出現字數不同，直接 return false。", "如果能順利跑完，代表兩邊字母次數完全一致！"],
        variations: "😈 變形考題：如果是 Unicode 字元怎麼辦？👉 只能乖乖用 Dictionary，不能用長度 26 的 Array 了。",
        complexity: { time: "O(n)", space: "O(1)" },
        script: "「為了 O(n) 的效能，我會用 Dictionary 紀錄字元出現的淨次數。遇到新字元就賦值 1，遇到舊字元就 +1；第二個字串則反向扣除。」",
        code: `// Python 邏輯實作\n/*\ndef isAnagram(s, t):\n    if len(s) != len(t): return False\n    lookup = {}\n    for i in s:\n        if i not in lookup:\n            lookup[i] = 1\n        else:\n            lookup[i] += 1\n    for j in t:\n        if j not in lookup or lookup[j] == 0:\n            return False\n        lookup[j] -= 1\n    return True\n*/\n\n// Swift 版本\nfunc isAnagram(_ s: String, _ t: String) -> Bool {\n    if s.count != t.count { return false }\n    var counts = [Character: Int]()\n    for char in s { counts[char, default: 0] += 1 }\n    for char in t { counts[char, default: 0] -= 1 }\n    return counts.values.allSatisfy { $0 == 0 }\n}`
    },
    {
        order: 4, category: "Hash Map", id: 49, title: "Group Anagrams", difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/group-anagrams/",
        englishDesc: "Given an array of strings <code>strs</code>, group the anagrams together. You can return the answer in any order.",
        fullEnglishDesc: `<strong>Example 1:</strong><br><pre>Input: strs = ["eat","tea","tan","ate","nat","bat"]\nOutput: [["bat"],["nat","tan"],["ate","eat","tea"]]</pre><strong>Constraints:</strong><ul><li>1 <= strs.length <= 10^4</li><li>strs[i] consists of lowercase English letters.</li></ul>`,
        coreConcept: "將排序後的字串當作 Key，相同的歸類成 Value Array。",
        thoughtProcess: ["建立字典 `[String: [String]]`。", "走訪每個字串，把它排序 (eat -> aet)。", "把 aet 當 Key，原本的 eat 加入該 Key 的陣列中。", "回傳字典的所有 values。"],
        variations: "😈 變形考題：如果字串很長，排序太慢？👉 可以把 Key 改成「長度為 26 的字母次數陣列轉換成的字串 (如 1a1e1t)」。",
        complexity: { time: "O(n * k log k)", space: "O(n * k)" },
        script: "「核心思路是尋找統一的特徵作為 Key，所以我會將每個字串排序。排序後的字串做 Key，原字串 Append 到對應的 Value Array 裡。」",
        code: `func groupAnagrams(_ strs: [String]) -> [[String]] {\n    var dict = [String: [String]]()\n    for str in strs {\n        let sortedStr = String(str.sorted())\n        dict[sortedStr, default: []].append(str)\n    }\n    return Array(dict.values)\n}`
    },
    {
        order: 5, category: "Two Pointers", id: 125, title: "Valid Palindrome", difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/valid-palindrome/",
        englishDesc: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.",
        fullEnglishDesc: `Alphanumeric characters include letters and numbers.<br><br><strong>Example 1:</strong><br><pre>Input: s = "A man, a plan, a canal: Panama"\nOutput: true\nExplanation: "amanaplanacanalpanama" is a palindrome.</pre>`,
        coreConcept: "左右指標往中間夾擠，檢查是否為回文。",
        thoughtProcess: ["過濾非英數字元並轉小寫。", "left 指標在最左，right 在最右。", "如果 left 和 right 字元不相等回傳 false。", "相等就往中間移動，直到相遇。"],
        variations: "😈 變形考題：如果不准建立新字串過濾呢？👉 在 while 迴圈內，遇到非英數字元就讓 left 或 right 指標跳過 (continue)。",
        complexity: { time: "O(n)", space: "O(n)" },
        script: "「我會先過濾非英數字元並轉小寫。接著用左右兩個 Pointer 往中間夾擠，只要遇到不相等的字母就 return false，能在 O(n) 完成。」",
        code: `func isPalindrome(_ s: String) -> Bool {\n    let chars = Array(s.lowercased().filter { $0.isLetter || $0.isNumber })\n    var l = 0, r = chars.count - 1\n    while l < r {\n        if chars[l] != chars[r] { return false }\n        l += 1; r -= 1\n    }\n    return true\n}`
    },
    {
        order: 6, category: "Two Pointers", id: 167, title: "Two Sum II", difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
        englishDesc: "Given a 1-indexed array of integers <code>numbers</code> that is already sorted in non-decreasing order, find two numbers such that they add up to a specific <code>target</code> number.",
        fullEnglishDesc: `Return the indices of the two numbers, <strong>index1</strong> and <strong>index2</strong>, added by one as an integer array [index1, index2] of length 2.<br>The tests are generated such that there is <strong>exactly one solution</strong>. You <strong>may not</strong> use the same element twice. Your solution must use only constant extra space.`,
        coreConcept: "陣列已排序，用左右指標夾擠，太大右移，太小左移。",
        thoughtProcess: ["left 在開頭，right 在結尾。", "計算兩者總和。等於目標就回傳 [left+1, right+1]。", "大於目標代表右邊太大，right 往左移。", "小於目標代表左邊太小，left 往右移。"],
        variations: "😈 變形考題：如果陣列沒排序？👉 退回使用 Hash Map 空間換時間的解法 (Two Sum I)。",
        complexity: { time: "O(n)", space: "O(1)" },
        script: "「因為題目強調陣列已經排序，所以不用 O(n) 的 Hash Map。直接用左右指標，總和太大代表右指標要左移，太小則左指標右移。」",
        code: `func twoSum(_ numbers: [Int], _ target: Int) -> [Int] {\n    var l = 0, r = numbers.count - 1\n    while l < r {\n        let sum = numbers[l] + numbers[r]\n        if sum == target { return [l + 1, r + 1] }\n        else if sum > target { r -= 1 }\n        else { l += 1 }\n    }\n    return []\n}`
    },
    {
        order: 7, category: "Two Pointers", id: 15, title: "3Sum", difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/3sum/",
        englishDesc: "Given an integer array <code>nums</code>, return all the triplets <code>[nums[i], nums[j], nums[k]]</code> such that <code>i != j</code>, <code>i != k</code>, and <code>j != k</code>, and <code>nums[i] + nums[j] + nums[k] == 0</code>.",
        fullEnglishDesc: `Notice that the solution set must not contain duplicate triplets.<br><br><strong>Example 1:</strong><br><pre>Input: nums = [-1,0,1,2,-1,-4]\nOutput: [[-1,-1,2],[-1,0,1]]</pre>`,
        coreConcept: "先排序，迴圈固定第一個數字，剩下用雙指標找 Two Sum。",
        thoughtProcess: ["把 Array 排序，方便避開重複。", "外層迴圈枚舉第一個數字 nums[i]，重複就跳過。", "內層用 left, right 找和為 -nums[i] 的組合。", "找到後 left/right 同步內縮，且跳過重複值。"],
        variations: "😈 變形考題：如果是 4Sum 呢？👉 再外面多包一層迴圈，固定前兩個數，裡面一樣用雙指標。",
        complexity: { time: "O(n²)", space: "O(1)" },
        script: "「為了避免重複組合，我會先『排序』。外層迴圈固定第一個數，然後把問題降維成 Two Pointers 尋找 0 - nums[i]，並嚴格過濾重複數字。」",
        code: `func threeSum(_ nums: [Int]) -> [[Int]] {\n    let nums = nums.sorted()\n    var res = [[Int]]()\n    for i in 0..<nums.count {\n        if i > 0 && nums[i] == nums[i-1] { continue }\n        var l = i + 1, r = nums.count - 1\n        while l < r {\n            let sum = nums[i] + nums[l] + nums[r]\n            if sum > 0 { r -= 1 }\n            else if sum < 0 { l += 1 }\n            else {\n                res.append([nums[i], nums[l], nums[r]])\n                l += 1; r -= 1\n                while l < r && nums[l] == nums[l-1] { l += 1 }\n            }\n        }\n    }\n    return res\n}`
    },
    {
        order: 8, category: "Two Pointers", id: 11, title: "Container With Most Water", difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/container-with-most-water/",
        englishDesc: "You are given an integer array <code>height</code> of length <code>n</code>. Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        fullEnglishDesc: `There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Return the maximum amount of water a container can store. You may not slant the container.<br><br><strong>Constraints:</strong><ul><li>n == height.length</li><li>2 <= n <= 10^5</li></ul>`,
        coreConcept: "左右夾擠計算面積，哪邊的柱子矮，哪邊就往內移。",
        thoughtProcess: ["面積 = 距離 x 較矮的柱子。", "left 在最左，right 在最右，記錄最大面積。", "計算當前面積並更新最大值。", "因為高度受限於矮的，所以把矮的那側往內縮，賭下一個比較高。"],
        variations: "😈 變形考題：如果是接雨水 (Trapping Rain Water)？👉 那就是 Hard 題了，要用 LeftMax 和 RightMax 陣列來算每個位子的凹陷程度。",
        complexity: { time: "O(n)", space: "O(1)" },
        script: "「面積的瓶頸在於較矮的柱子，所以用雙指標紀錄當前面積後，果斷把較矮的那一側往內移動，尋找下一個更高的柱子，以此更新最大值。」",
        code: `func maxArea(_ height: [Int]) -> Int {\n    var l = 0, r = height.count - 1\n    var maxWater = 0\n    while l < r {\n        let w = r - l\n        let h = min(height[l], height[r])\n        maxWater = max(maxWater, w * h)\n        if height[l] < height[r] { l += 1 }\n        else { r -= 1 }\n    }\n    return maxWater\n}`
    },
    {
        order: 9, category: "Sliding Window", id: 121, title: "Buy and Sell Stock", difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        englishDesc: "You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
        fullEnglishDesc: `Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.<br><br><strong>Example 1:</strong><br><pre>Input: prices = [7,1,5,3,6,4]\nOutput: 5\nExplanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.</pre>`,
        coreConcept: "維護歷史最低價，計算當下賣出的利潤，更新最大利潤。",
        thoughtProcess: ["建立變數：`minPrice` 記錄歷史最低，`maxProfit` 記錄最大利潤。", "走訪每一天，若比 `minPrice` 低就更新。", "否則算今天賣的利潤，若比 `maxProfit` 大就更新。"],
        variations: "😈 變形考題：如果可以無限次買賣呢 (Stock II)？👉 只要今天的價錢比昨天高，就把差價全加進利潤裡（貪婪法 Greedy）。",
        complexity: { time: "O(n)", space: "O(1)" },
        script: "「只要一次遍歷。用變數記住遇到的『歷史最低點』，然後用每一天的價格減去最低點，隨時更新『最大利潤』即可完成 O(n) 操作。」",
        code: `func maxProfit(_ prices: [Int]) -> Int {\n    var minPrice = Int.max\n    var maxProfit = 0\n    for price in prices {\n        if price < minPrice { minPrice = price }\n        else { maxProfit = max(maxProfit, price - minPrice) }\n    }\n    return maxProfit\n}`
    },
    {
        order: 10, category: "Sliding Window", id: 3, title: "Longest Substring W/O Repeating", difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        englishDesc: "Given a string <code>s</code>, find the length of the longest substring without repeating characters.",
        fullEnglishDesc: `<strong>Example 1:</strong><br><pre>Input: s = "abcabcbb"\nOutput: 3\nExplanation: The answer is "abc", with the length of 3.</pre><strong>Constraints:</strong><ul><li>0 <= s.length <= 5 * 10^4</li><li>s consists of English letters, digits, symbols and spaces.</li></ul>`,
        coreConcept: "用左右指標拉出一個「窗口」，用 Set 記錄出現過的字母，遇到重複就縮小左邊界。",
        thoughtProcess: ["建立 `left` 指標與 `Set`。", "用 `right` 跑迴圈：若不在 Set 中，加進 Set 更新最大長度。", "若已在 Set，把 `left` 的字元移除並右移，直到無重複。"],
        variations: "😈 變形考題：如果字串只包含小寫英文字母？👉 把 Set 換成長度 26 的 Bool Array，效能會更快！",
        complexity: { time: "O(n)", space: "O(min(n, 26))" },
        script: "「這題是經典的滑動窗口。右指針不斷擴張並把字元加入 Set。遇到重複時，左指針就開始收縮並移除 Set 的字元，直到窗口恢復不重複狀態為止。」",
        code: `func lengthOfLongestSubstring(_ s: String) -> Int {\n    var chars = Array(s)\n    var seen = Set<Character>()\n    var left = 0, maxLen = 0\n    for right in 0..<chars.count {\n        while seen.contains(chars[right]) {\n            seen.remove(chars[left])\n            left += 1\n        }\n        seen.insert(chars[right])\n        maxLen = max(maxLen, right - left + 1)\n    }\n    return maxLen\n}`
    },
    {
        order: 11, category: "Sliding Window", id: 424, title: "Character Replacement", difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/longest-repeating-character-replacement/",
        englishDesc: "You are given a string <code>s</code> and an integer <code>k</code>. You can choose any character of the string and change it to any other uppercase English character at most <code>k</code> times.",
        fullEnglishDesc: `Return the length of the longest substring containing the same letter you can get after performing the above operations.<br><br><strong>Example 1:</strong><br><pre>Input: s = "ABAB", k = 2\nOutput: 4\nExplanation: Replace the two 'A's with two 'B's or vice versa.</pre>`,
        coreConcept: "維護窗口內『最多出現字母』的次數，判斷是否超過 k 額度。",
        thoughtProcess: ["建立字典算次數，用 `maxFreq` 記錄出現最多次數。", "窗口大小減去 `maxFreq` = 『需替換的數量』。", "大於 `k`，代表窗口無效，把 `left` 右移並扣除字典計數。"],
        variations: "😈 變形考題：為什麼 left 右移時不用重新找 maxFreq？👉 因為我們只關心「歷史最大的 maxFreq」，就算縮小了也不影響我們尋求更大的窗口。",
        complexity: { time: "O(n)", space: "O(1)" },
        script: "「窗口的有效條件是：窗口總長度減去『最高頻字母數量』必須小於等於 k。超過的話，就將左邊界向右移，以此維持最大窗口長度。」",
        code: `func characterReplacement(_ s: String, _ k: Int) -> Int {\n    let chars = Array(s)\n    var count = [Character: Int]()\n    var res = 0, left = 0, maxf = 0\n    for right in 0..<chars.count {\n        count[chars[right], default: 0] += 1\n        maxf = max(maxf, count[chars[right]]!)\n        while (right - left + 1) - maxf > k {\n            count[chars[left]]! -= 1\n            left += 1\n        }\n        res = max(res, right - left + 1)\n    }\n    return res\n}`
    },
    {
        order: 12, category: "Linked List", id: 206, title: "Reverse Linked List", difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/reverse-linked-list/",
        englishDesc: "Given the <code>head</code> of a singly linked list, reverse the list, and return the reversed list.",
        fullEnglishDesc: `<strong>Example 1:</strong><br><pre>Input: head = [1,2,3,4,5]\nOutput: [5,4,3,2,1]</pre><strong>Follow up:</strong> A linked list can be reversed either iteratively or recursively. Could you implement both?`,
        coreConcept: "背熟 prev, curr, next 三個變數的指標交換邏輯。",
        thoughtProcess: ["準備 `prev` (nil) 和 `curr` (head)。", "把 `curr.next` 存到 `nxt` 備用。", "把 `curr.next` 指向 `prev` (轉向)。", "`prev` 變成 `curr`，`curr` 變成 `nxt` (平移)。"],
        variations: "😈 變形考題：面試官要求用「遞迴 (Recursion)」寫？👉 將 head.next 的 next 指回自己，再把自己的 next 設成 nil。",
        complexity: { time: "O(n)", space: "O(1)" },
        script: "「這是指標操作基本功。宣告 prev 為 nil，curr 為 head。迴圈裡先備份 next node，把 curr 的 next 指向 prev，接著一起往前平移即可。」",
        code: `func reverseList(_ head: ListNode?) -> ListNode? {\n    var prev: ListNode? = nil\n    var curr = head\n    while curr != nil {\n        let nxt = curr?.next\n        curr?.next = prev\n        prev = curr\n        curr = nxt\n    }\n    return prev\n}`
    },
    {
        order: 13, category: "Linked List", id: 21, title: "Merge Two Sorted Lists", difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/merge-two-sorted-lists/",
        englishDesc: "You are given the heads of two sorted linked lists <code>list1</code> and <code>list2</code>. Merge the two lists into one sorted list.",
        fullEnglishDesc: `The list should be made by splicing together the nodes of the first two lists. Return the head of the merged linked list.<br><br><strong>Example 1:</strong><br><pre>Input: list1 = [1,2,4], list2 = [1,3,4]\nOutput: [1,1,2,3,4,4]</pre>`,
        coreConcept: "用 Dummy Node 起手，比較兩邊的值，小的就接上。",
        thoughtProcess: ["建立空 `dummy` 節點，用 `tail` 指標指向它。", "比較 list1 和 list2，誰小 tail 就接誰，並往前走。", "迴圈結束後，把剩下沒空掉的 list 直接接在 tail.next。"],
        variations: "😈 變形考題：如果是 Merge k 個 Sorted Lists (Hard)？👉 要用 Priority Queue (Min Heap) 或者 Divide and Conquer 來合併。",
        complexity: { time: "O(n + m)", space: "O(1)" },
        script: "「實務上操作 List 為了避免處理開頭的 null check，我會建一個 Dummy Node。用 while 迴圈比大小串接，結束後把剩餘的那條直接掛在尾巴。」",
        code: `func mergeTwoLists(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {\n    let dummy = ListNode(0)\n    var tail = dummy\n    var l1 = l1, l2 = l2\n    while l1 != nil && l2 != nil {\n        if l1!.val < l2!.val {\n            tail.next = l1; l1 = l1?.next\n        } else {\n            tail.next = l2; l2 = l2?.next\n        }\n        tail = tail.next!\n    }\n    tail.next = l1 ?? l2\n    return dummy.next\n}`
    },
    {
        order: 14, category: "Linked List", id: 141, title: "Linked List Cycle", difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/linked-list-cycle/",
        englishDesc: "Given <code>head</code>, the head of a linked list, determine if the linked list has a cycle in it.",
        fullEnglishDesc: `There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Return true if there is a cycle in the linked list. Otherwise, return false.<br><br><strong>Follow up:</strong> Can you solve it using O(1) (i.e. constant) memory?`,
        coreConcept: "龜兔賽跑演算法 (快慢指標)，有環一定會相遇。",
        thoughtProcess: ["設定 `slow` 和 `fast` 都指向 head。", "迴圈條件：fast 且 fast.next 皆不為 nil。", "slow 走一步，fast 走兩步。", "如果 slow 和 fast 記憶體位置相同，回傳 true。"],
        variations: "😈 變形考題：如何找出「環的起點」(Cycle II)？👉 當快慢相遇後，把慢指標丟回起點，快慢各走一步，再次相遇處就是起點！",
        complexity: { time: "O(n)", space: "O(1)" },
        script: "「比起用 Set 存走過的 Node 而吃掉 O(n) 空間，這題標準解法是快慢指標。Fast 走兩步 Slow 走一步，若有 Cycle，兩者必定在環內相遇。」",
        code: `func hasCycle(_ head: ListNode?) -> Bool {\n    var slow = head\n    var fast = head\n    while fast != nil && fast?.next != nil {\n        slow = slow?.next\n        fast = fast?.next?.next\n        if slow === fast { return true }\n    }\n    return false\n}`
    },
    {
        order: 15, category: "Trees", id: 104, title: "Max Depth of Binary Tree", difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        englishDesc: "Given the <code>root</code> of a binary tree, return its maximum depth.",
        fullEnglishDesc: `A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.<br><br><strong>Example 1:</strong><br><pre>Input: root = [3,9,20,null,null,15,7]\nOutput: 3</pre>`,
        coreConcept: "用遞迴 (DFS) 找出左右子樹的最深處再加 1。",
        thoughtProcess: ["終止條件：如果 node 是 nil，深度 0。", "遞迴：問左子樹深度、問右子樹深度。", "取兩者較大者 + 1，回傳。"],
        variations: "😈 變形考題：如果不用遞迴 (遞迴可能 Stack Overflow)？👉 改用 BFS (Queue) 掃描，每進下一層 level 就 +1。",
        complexity: { time: "O(n)", space: "O(h)" },
        script: "「處理樹的最佳利器是遞迴。Base case 是節點為 nil 傳 0，否則分別往下找左右子樹的最大深度，取 max 後加上自己這一層就是答案。」",
        code: `func maxDepth(_ root: TreeNode?) -> Int {\n    guard let root = root else { return 0 }\n    return max(maxDepth(root.left), maxDepth(root.right)) + 1\n}`
    },
    {
        order: 16, category: "Trees", id: 226, title: "Invert Binary Tree", difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/invert-binary-tree/",
        englishDesc: "Given the <code>root</code> of a binary tree, invert the tree, and return its root.",
        fullEnglishDesc: `<strong>Example 1:</strong><br><pre>Input: root = [4,2,7,1,3,6,9]\nOutput: [4,7,2,9,6,3,1]</pre>`,
        coreConcept: "先翻轉當前節點的左右子樹，再遞迴交給子樹處理。",
        thoughtProcess: ["終止條件：root 為 nil 回傳 nil。", "交換當前 root 的 left 和 right。", "遞迴呼叫 invertTree(root.left) 和 right。", "回傳 root。"],
        variations: "😈 變形考題：這題有什麼有名的八卦？👉 Homebrew 的作者當年去面試 Google，因為寫不出這題被拒絕了 (他覺得超幹)。",
        complexity: { time: "O(n)", space: "O(h)" },
        script: "「有名的 Google 面試翻車題。但其實很單純，只要把當前節點的左右指標互換，再遞迴呼叫左右子樹去做一樣的事情就搞定了。」",
        code: `func invertTree(_ root: TreeNode?) -> TreeNode? {\n    guard let root = root else { return nil }\n    let temp = root.left\n    root.left = root.right\n    root.right = temp\n    invertTree(root.left)\n    invertTree(root.right)\n    return root\n}`
    },
    {
        order: 17, category: "Trees", id: 100, title: "Same Tree", difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/same-tree/",
        englishDesc: "Given the roots of two binary trees <code>p</code> and <code>q</code>, write a function to check if they are the same or not.",
        fullEnglishDesc: `Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.<br><br><strong>Example 1:</strong><br><pre>Input: p = [1,2,3], q = [1,2,3]\nOutput: true</pre>`,
        coreConcept: "同時走訪兩棵樹，確保結構與值都一模一樣。",
        thoughtProcess: ["p 和 q 都是 nil：回傳 true。", "只有一個為 nil 或值不同：回傳 false。", "繼續遞迴比較 (p.left, q.left) && (p.right, q.right)。"],
        variations: "😈 變形考題：如果要判斷是不是「對稱樹 Symmetric Tree」呢？👉 把邏輯改成左邊跟右邊比 (p.left, q.right)。",
        complexity: { time: "O(n)", space: "O(h)" },
        script: "「遞迴檢查三種情境：兩者皆 nil 傳 true，一邊 nil 或值不同傳 false。兩者都存在且相等，就往下遞迴左子樹跟右子樹。」",
        code: `func isSameTree(_ p: TreeNode?, _ q: TreeNode?) -> Bool {\n    if p == nil && q == nil { return true }\n    if p == nil || q == nil || p?.val != q?.val { return false }\n    return isSameTree(p?.left, q?.left) && isSameTree(p?.right, q?.right)\n}`
    },
    {
        order: 18, category: "Stack", id: 20, title: "Valid Parentheses", difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/valid-parentheses/",
        englishDesc: "Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.",
        fullEnglishDesc: `An input string is valid if:<ol><li>Open brackets must be closed by the same type of brackets.</li><li>Open brackets must be closed in the correct order.</li><li>Every close bracket has a corresponding open bracket of the same type.</li></ol>`,
        coreConcept: "用 Array 模擬 Stack 處理『配對與後進先出』的問題。",
        thoughtProcess: ["建對應表字典。", "遇左括號：push 入 stack。", "遇右括號：pop 出最後一個元素，檢查是否配對。", "最後檢查 stack 必須清空。"],
        variations: "😈 變形考題：如果括號只有一種 ()，能不用 Stack 嗎？👉 可以！設一個計數器，遇左 +1 遇右 -1，過程中不能變負數，最後要是 0。",
        complexity: { time: "O(n)", space: "O(n)" },
        script: "「我會建一個 Dictionary 來映射左右括號。遇到左括號塞進 Stack，遇到右括號則 Pop 出來檢查是否配對成功，最後確認 Stack 必須清空。」",
        code: `func isValid(_ s: String) -> Bool {\n    var stack = [Character]()\n    let map: [Character: Character] = ["(": ")", "{": "}", "[": "]"]\n    for char in s {\n        if map.keys.contains(char) { stack.append(char) }\n        else {\n            if stack.isEmpty || map[stack.removeLast()] != char { return false }\n        }\n    }\n    return stack.isEmpty\n}`
    },
    {
        order: 19, category: "Stack", id: 155, title: "Min Stack", difficulty: "Medium",
        leetcodeUrl: "https://leetcode.com/problems/min-stack/",
        englishDesc: "Design a stack that supports <code>push</code>, <code>pop</code>, <code>top</code>, and retrieving the minimum element in constant time.",
        fullEnglishDesc: `Implement the MinStack class:<ul><li>MinStack() initializes the stack object.</li><li>void push(int val) pushes the element val onto the stack.</li><li>void pop() removes the element on the top of the stack.</li><li>int top() gets the top element of the stack.</li><li>int getMin() retrieves the minimum element in the stack.</li></ul>You must implement a solution with O(1) time complexity for each function.`,
        coreConcept: "Stack 內不僅存值，還要同步存「從底部到目前為止的最小值」。",
        thoughtProcess: ["陣列存 Tuple：`(val: Int, min: Int)`。", "push 新數字時，拿新數字跟『上一個狀態的最小值』比，算出新的最小值存入。", "pop 時舊最小值會自動恢復。"],
        variations: "😈 變形考題：如果不想用 Tuple，只存純數字呢？👉 那你要建兩個 Stack，一個存所有數字，另一個單純追蹤遞減的最小值！",
        complexity: { time: "O(1) 每個操作", space: "O(n)" },
        script: "「為了 O(1) 取得最小值，我會在 Stack 裡改存 Tuple。在 Push 時，拿新值和舊的 Min 值比對，一併存入當下的歷史最低值。」",
        code: `class MinStack {\n    var stack: [(val: Int, min: Int)] = []\n    func push(_ val: Int) {\n        let currentMin = stack.isEmpty ? val : min(val, stack.last!.min)\n        stack.append((val, currentMin))\n    }\n    func pop() { stack.removeLast() }\n    func top() -> Int { return stack.last!.val }\n    func getMin() -> Int { return stack.last!.min }\n}`
    },
    {
        order: 20, category: "Binary Search", id: 704, title: "Binary Search", difficulty: "Easy",
        leetcodeUrl: "https://leetcode.com/problems/binary-search/",
        englishDesc: "Given an array of integers <code>nums</code> which is sorted in ascending order, and an integer <code>target</code>, write a function to search <code>target</code> in <code>nums</code>.",
        fullEnglishDesc: `If target exists, then return its index. Otherwise, return -1. You must write an algorithm with <strong>O(log n)</strong> runtime complexity.<br><br><strong>Example 1:</strong><br><pre>Input: nums = [-1,0,3,5,9,12], target = 9\nOutput: 4\nExplanation: 9 exists in nums and its index is 4</pre>`,
        coreConcept: "在已排序陣列找目標，從中間切對半，O(log n) 的終極模板。",
        thoughtProcess: ["`left = 0`, `right = count - 1`。", "迴圈 `while left <= right`。", "算 `mid = left + (right - left) / 2` 防溢位。", "比大小縮減範圍。"],
        variations: "😈 變形考題：如果陣列有重複數字，要找第一個出現的位置？👉 找到相等時不要 return，把 right = mid - 1 繼續往左逼近。",
        complexity: { time: "O(log n)", space: "O(1)" },
        script: "「看到已排序且要求 O(log n)，就是二分搜尋。維護左右邊界，每次取 mid 比大小後縮減一半範圍。特別注意迴圈條件要有等號，以及 mid 防溢位。」",
        code: `func search(_ nums: [Int], _ target: Int) -> Int {\n    var left = 0, right = nums.count - 1\n    while left <= right {\n        let mid = left + (right - left) / 2\n        if nums[mid] == target { return mid }\n        else if nums[mid] < target { left = mid + 1 }\n        else { right = mid - 1 }\n    }\n    return -1\n}`
    }
];

// --- 勵志防瞌睡語錄 ---
const quotes = [
    "「還在睡？你的競爭對手剛在廁所裡用手機刷完一題了！」",
    "「你離 12 萬月薪的博弈公司，只差這幾題的距離。」",
    "「面試官最喜歡看人結巴了，別給他們這個機會。」",
    "「這不是演算法，這是你通往不加班、爽領高薪的財富密碼。」",
    "「再看一題！今天流的汗，都是明天談薪水的底氣！」"
];

// --- 狀態變數 ---
let masteredQuestions = JSON.parse(localStorage.getItem('leetcode-mastered') || '[]');
let isFlashcardMode = false;

// --- DOM Elements ---
const questionList = document.getElementById('question-list');
const categoryNav = document.getElementById('category-nav');
const progressFill = document.getElementById('progress-bar');
const progressPercent = document.getElementById('progress-percent');
const masteredCount = document.getElementById('mastered-count');
const motivationQuote = document.getElementById('motivation-quote');

// --- 渲染分類 ---
function renderCategories() {
    const categories = ["All (依循序漸進)", ...new Set(questionsData.map(q => q.category))];
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `cat-btn ${cat.startsWith('All') ? 'active' : ''}`;
        btn.textContent = cat;
        btn.addEventListener('click', () => filterQuestions(cat, btn));
        categoryNav.appendChild(btn);
    });
}

function filterQuestions(category, activeBtn) {
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');

    const filteredData = category.startsWith('All') 
        ? questionsData 
        : questionsData.filter(q => q.category === category);
    
    renderQuestions(filteredData);
}

// --- 渲染題目 ---
function renderQuestions(data) {
    questionList.innerHTML = '';
    const sortedData = [...data].sort((a, b) => a.order - b.order);
    
    sortedData.forEach(q => {
        const isMastered = masteredQuestions.includes(q.id);
        const diffClass = q.difficulty === 'Easy' ? 'diff-easy' : 'diff-medium';
        const stepsHtml = q.thoughtProcess.map(step => `<li>${step}</li>`).join('');
        
        const cardHtml = `
            <div class="card ${isMastered ? 'mastered' : ''}" id="card-${q.id}">
                <div class="card-header">
                    <div class="card-title">
                        <span class="order-badge">#${q.order}</span>
                        <a href="${q.leetcodeUrl}" target="_blank" class="question-link">${q.id}. ${q.title} <i class="fas fa-external-link-alt"></i></a>
                    </div>
                    <span class="difficulty ${diffClass}">${q.difficulty}</span>
                </div>
                
                <label class="master-checkbox">
                    <input type="checkbox" onchange="toggleMastered(${q.id}, this)" ${isMastered ? 'checked' : ''}>
                    我已經掌握這題的套路了 (打勾隱藏)
                </label>
                
                <div class="card-body ${isFlashcardMode ? 'flashcard-mode' : ''}">
                    <div class="english-desc-box">
                        <strong>
                            <span><i class="fas fa-language"></i> Original Prompt</span>
                            <button class="toggle-full-desc-btn" onclick="toggleFullDesc(this)">
                                View Full <i class="fas fa-chevron-down"></i>
                            </button>
                        </strong>
                        <div class="short-desc">${q.englishDesc}</div>
                        <div class="full-desc-content">${q.fullEnglishDesc}</div>
                    </div>

                    <div class="blur-content" onclick="revealContent(this)">
                        <div class="concept-title"><i class="fas fa-lightbulb"></i> 核心觀念</div>
                        <p class="concept-text">${q.coreConcept}</p>
                        
                        <div class="concept-title"><i class="fas fa-brain"></i> 思維引導 (Step-by-Step)</div>
                        <ol class="thought-process">
                            ${stepsHtml}
                        </ol>
                        
                        <div class="variation-box">
                            ${q.variations}
                        </div>
                        
                        <div class="complexity">
                            <span><i class="far fa-clock"></i> ${q.complexity.time}</span>
                            <span><i class="fas fa-memory"></i> ${q.complexity.space}</span>
                        </div>
                        
                        <div class="script-box">
                            <strong><i class="fas fa-comment-dots"></i> 面試白板題防禦話術：</strong>
                            ${q.script}
                        </div>
                    </div>
                </div>
                
                <div class="code-section">
                    <button class="toggle-code-btn" onclick="toggleCode(this)">
                        <i class="fas fa-code"></i> 顯示/隱藏 Swift 範例解答
                    </button>
                    <pre class="code-block"><code>${q.code}</code></pre>
                </div>
            </div>
        `;
        questionList.innerHTML += cardHtml;
    });
}

// --- 切換完整英文敘述 ---
function toggleFullDesc(btn) {
    const fullContent = btn.parentElement.nextElementSibling.nextElementSibling;
    const icon = btn.querySelector('i');
    
    fullContent.classList.toggle('show');
    
    if (fullContent.classList.contains('show')) {
        btn.innerHTML = 'Hide Full <i class="fas fa-chevron-up"></i>';
    } else {
        btn.innerHTML = 'View Full <i class="fas fa-chevron-down"></i>';
    }
}

// --- 進度與打勾邏輯 ---
function toggleMastered(id, checkbox) {
    const card = document.getElementById(`card-${id}`);
    if (checkbox.checked) {
        if (!masteredQuestions.includes(id)) masteredQuestions.push(id);
        card.classList.add('mastered');
    } else {
        masteredQuestions = masteredQuestions.filter(qId => qId !== id);
        card.classList.remove('mastered');
    }
    localStorage.setItem('leetcode-mastered', JSON.stringify(masteredQuestions));
    updateProgress();
}

function updateProgress() {
    const count = masteredQuestions.length;
    const percent = Math.round((count / questionsData.length) * 100);
    
    masteredCount.textContent = count;
    progressPercent.textContent = percent + '%';
    progressFill.style.width = percent + '%';
    
    // Randomize quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    motivationQuote.textContent = randomQuote;
}

// --- 閃卡與程式碼互動 ---
function revealContent(element) {
    if (isFlashcardMode) {
        element.classList.add('revealed');
    }
}

function toggleCode(btn) {
    const codeBlock = btn.nextElementSibling;
    codeBlock.classList.toggle('show');
    const icon = btn.querySelector('i');
    icon.className = codeBlock.classList.contains('show') ? 'fas fa-eye-slash' : 'fas fa-code';
}

// --- 模式切換邏輯 ---
function setupToggles() {
    // Theme Toggle
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeBtn.querySelector('i');

    if (localStorage.getItem('leetcode-theme') === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fas fa-sun';
    }

    themeBtn.addEventListener('click', () => {
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            localStorage.setItem('leetcode-theme', 'light');
            themeIcon.className = 'fas fa-moon';
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('leetcode-theme', 'dark');
            themeIcon.className = 'fas fa-sun';
        }
    });

    // Flashcard Toggle
    const flashBtn = document.getElementById('flashcard-toggle');
    flashBtn.addEventListener('click', () => {
        isFlashcardMode = !isFlashcardMode;
        flashBtn.classList.toggle('flashcard-active');
        
        // 重新渲染以套用 blur
        const activeCat = document.querySelector('.cat-btn.active').textContent;
        const filteredData = activeCat.startsWith('All') ? questionsData : questionsData.filter(q => q.category === activeCat);
        renderQuestions(filteredData);
    });
}

// --- 初始化 ---
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderQuestions(questionsData);
    setupToggles();
    updateProgress();
});