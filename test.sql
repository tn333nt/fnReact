    select count(distinct hacker_id) 
    from submissions s1 , 
    (select distinct submission_date from submissions) s
    where 
    (
        select count(distinct(submission_date)) from submissions s2 
        where s2.hacker_id = s1.hacker_id
        and s2.submission_date <= s1.submission_date
        -- why all count/day return 0 when remove "=" ? should it be data - bayBeing's data ?
        -- cuz it's not satisfy id condition !
    ) 
    = datediff(day, "2016-03-01", s.submission_date) + 1
    -- = datediff(day, s.submission_date, "2016-03-01") + 1 --distance from start day
    -- why de nhu vay thi kq gop het ve date1 con nhung date khac total deu = 0 ?? con dao nguoc lai thi ko bi ???
    -- vi no return negative =) i.e no data found, only case date1 ruturn 0+1=1 -> co data=)
    and s1.submission_date = s.submission_date
    group by s.submission_date
    -- why it automatically order by date for me ?
    -- and in subQ case, i need to order manually ?
    -- random ??? @@

-- 112
-- 59
-- 51
-- 49
-- 49
-- 49
-- 35
-- 35
-- 35
-- 35
-- 35
-- 35
-- 35
-- 35
-- 35

    -- s2.submission_date (prevDate) <= s1.submission_date (dateBeing)
    -- if only = it'll group all in date1 again -> only have 1 data if "=" =)
    -- if only < all total will return 0 -> why?

-- 1
-- sao để select xong group by như vậy thì nó ra đúng kq đã đc select vs order, 
-- còn để cái phần s1 trong sub query rồi mới group by thì nó ko order ?

-- 2
-- sao ở đây https://www.w3schools.com/sql/trysqlserver.asp?filename=trysql_func_sqlserver_datediff
-- vd trông vẻ diff = date1 - date2 mà để như vậy trong bài nó lại lỗi ?
-- để lại cho vẻ date2 - date1 thì mới đc ?
-- mà lỗi cũng hơi kì:D sao nó gộp hết cái cần tính vào date2, tức vế cho là start day, còn những day khác đều ko nhận diff ?


-- no trung hop vao case sum(c.pop)%count(c.name) = 0
-- nen thuc ra ko can round =)
select country.continent, avg(city.population) from city, country
where CITY.CountryCode = COUNTRY.Code 
group by country.continent
-- vi day la continent's RESPECTIVE avg(pop) nen gb ko anh huong phan gop nha =)


select sum(city.population) from city, country
where CITY.CountryCode = COUNTRY.Code
and CONTINENT = 'Asia' -- sao cho nay ko co country thi van dung ma cho pop ko co city thi lai sai ? =)
-- 1 cai dispaly 1 cai for cond 
-- lol vi name in both con continent thi ko nha m = =


--c
/*
If more than one student created the same number of challenges and the count is less than the maximum number of challenges created, then exclude those students from the result.

i.e when count of c of h has the duplicate val :
- if counted c (gb each h) = max total no of c -> include (in cond?)
- if it's not -> exclude (not ?)
*/

select hacker_id, name, count(challenge_id)
from Hackers h, Challenges c
where h.hacker_id = c.hacker_id
-- where challenge_id = 
group by hacker_id, name
having count(challenge_id) = (select max() from abc)
-- the thi no chi lay cases co tong so c = max count(c) thoi
-- ma o day thi can PICK UP when condition matches
order by count(t.m) desc, t.hacker_id

-- count(c.challenge_id) in (select count(challenge_id) count from challenges 
--                                 group by hacker_id, count
--                             having count(count) = 1)
-- qtr la neu de nvay thi cho having no se bi aggr f long aggr f
-- hon nua cho gb se la "gb h_i && count simul" con if nest thi se la "gb h_i trc then gb count"


-- sp
select f1.x, f1.y from functions f1, functions f2
where f1.x = f2.y
and f1.y = f2.x
-- luc nay se lay dc tap hop all cases ma x = y
-- and f1.x <= f1.y
group by f1.x, f1.y
having count(*) > 1 or f1.x < f1.y
order by f1.x


select h.hacker_id, h.name, sum(s.score)
from hackers h, Submissions s
where h.hacker_id = s.hacker_id
and s.score = (select t.m from (select hacker_id, 
                        max(score) m
                         from submission
                         where hacker_id = h.hacker_id
                    group by hacker_id, challenge_id
                        ) t
)
group by h.hacker_id, h.name
    having sum(s.score) > 0
order by sum(s.score) desc, hacker_id