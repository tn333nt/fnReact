-- select cast(avg(lat_n) as decimal(9,4)) from station
-- where (select lat_n from (select top 50 percent count(id)-0.5 from station
--                          order by lat_n)) 
--         = (select lat_n from (select top 50 percent count(id)-0.5 from station
--             order by lat_n desc))

-- select cast(avg(lat_n) as decimal(9,4)) from station
-- where lat_n = (select top 1 lat_n from (select top 50 percent lat_n from station
--                          order by lat_n desc ))

-- select cast(avg(lat_n) as decimal(9,4)) from station s
-- where lat_n = (select top 1 lat_n from (select top 50 percent lat_n from station
--                          order by lat_n desc ))
--        and lat_n = (select top 1 lat_n from (select top 50 percent count(id)-0.5 from station
--                          order by lat_n desc))


-- select cast(avg(s1.lat_n + s2.lat_n) as decimal(9,4)) from station s
-- where s1.lat_n = (select top 1 lat_n 
--                   from (select top 50 percent lat_n 
--                         from (select lat_n from station order by lat_n) s1
--                        order by lat_n desc) )
-- AND s2.lat_n = (select top 1 lat_n 
--                 from (select top 50 percent lat_n 
--                         from (select lat_n from station order by lat_n desc) s2
--                        order by lat_n desc ) ) 

select
    (select case 
        when (select count(d.name)
        from OCCUPATIONS d
        group by occupation, name) < (select count(name)
        from OCCUPATIONS
        group by occupation, name) then "NULL"  
        else name
    end
    from OCCUPATIONS d
    where occupation="Doctor"
    group by occupation, name),
    (select case 
        when (select count(p.name)
        from OCCUPATIONS p
        group by occupation, name) < (select count(name)
        from OCCUPATIONS
        group by occupation, name) then "NULL"  
     else name
    end
    from OCCUPATIONS p
    where occupation="Professor"
    group by occupation, name),
    (select case 
        when (select count(s.name)
        from OCCUPATIONS s
        group by occupation, name) < (select count(name)
        from OCCUPATIONS
        group by occupation, name) then "NULL"  
     else name
    end
    from OCCUPATIONS s
    where occupation="Singer"
    group by occupation, name),
    (select case 
        when (select count(a.name)
        from OCCUPATIONS a
        group by occupation, name) < (select count(name)
        from OCCUPATIONS
        group by occupation, name) then "NULL"  
     else name
    end
    from OCCUPATIONS a
    where occupation="Actor"
    group by occupation, name)
from OCCUPATIONS
-- group by occupation 
order by name


select cast(lat_n as decimal(9,4))
from
    (select lat_n, row_number() over (order by lat_n) as rn
    from station) as whyNeedAliasInHere
where rn = ( select round((count(lat_n) + 1)/2, 0)
from station )
-- still right only with total = odd


select case
    when count(c.challenge_id) = (select count(challenge_id) as totalC
    from challenges
    where hacker_id = h.hacker_id)  
        then "1 cai thoi"
    else "1 cai thoi va ko co NOT"
    -- else not *
    end
from hackers h, challenges c
order by totalC desc, hacker_id


select p1.start_date, p2.end_date
from projects p1, projects p2
where (day(pj1.end_date) + 1) = day(pj2.end_date)
-- co loi syntax dau =(


with
    temp
    as
    (
        select p1.start_date, p2.end_date
        from projects p1, projects p2
        where (day(p1.end_date) + 1) = day(p2.end_date)
    )
-- roi nhung case khac nhieu row hon thi cung 1,2 dc u?

select start_date, end_date
from projects
where start_date = (select start_date
    from temp)
    and end_date = (select end_date
    from temp)
group by start_date, end_date
having datediff(day, start_date, end_date) = 1
order by count(temp), start_date

SELECT f1.x, f1.y
FROM functions f1
    JOIN functions f2
    ON f1.x = f2.y
        AND f1.y = f2.x
--symmetric cons
GROUP BY f1.x, f1.y
-- select by each x,y range
HAVING COUNT(*) >= 2 -- cuz u don't consider only 1 rec
    OR f1.x < f1.y
-- where x<y?
ORDER BY f1.x


-- no cte
select submission_date,
    -- (2) no of h who has made consecutive sub in the past fews day (consider being day)
    -- select no of distinct h whose on certain date = no of days the contest starts
    (
    select count(distinct s1.hacker_id)
    from submissions s1
    where s1.submission_date = s.submission_date
        and (select count(distinct s2.submission_date)
        from submissions s2
        where s2.hacker_id = s1.hacker_id
            and s2.submission_date < s.submission_date
        ) = 
        datediff(day, submission_date, "2016-03-01")
) ,
    -- (1) pick h who submit the most amount of data (among (2))
    (
    select hacker_id
    from submissions
    where submission_date = s.submission_date
    group by hacker_id
    order by count(submission_id) desc
            -- (select top 1 hacker_id from submissions)
) temp ,
    (
    select name
    from hackers
    where hacker_id = temp
)
from (select distinct submission_date
    from submissions) s
group by submission_date


select submission_date, (
-- (2) no of h who has made consecutive sub in the past fews day (consider being day)
    select count(distinct hacker_id)
    from submissions s1
    where s1.submission_date = s.submission_date
        and (select count(distinct s2.submission_date)
        from submissions s2
        where s2.hacker_id = s1.hacker_id
            and s2.submission_date < s.submission_date --
        ) --on date
        = datediff(day, s.submission_date, "2016-03-01") + 1 --distance from start day
) , ( 
-- (1) pick h who submit the most amount of data (among (2))
    select top 1
        hacker_id
    from submissions
    where submission_date = s.submission_date
    group by hacker_id
    order by count(submission_id) desc , hacker_id
) , (
    select name
    from hackers
    where hacker_id = ( select top 1
        hacker_id
    from submissions
    where submission_date = s.submission_date
    group by hacker_id
    order by count(submission_id) desc , hacker_id
    )
)
from (select distinct submission_date
    from submissions) s
group by submission_date


-- count of each h and be grouped by date outside
-- select numbers of h (identify by id) who has sub in all previous days before :
select count(distinct hacker_id)
from submissions s1,
    (select distinct submission_date
    from submissions) s
-- 15 days
where s1.submission_date = s.submission_date
    and (select count(distinct s2.submission_date)
    from submissions s2
    where s2.hacker_id = s1.hacker_id
        and s2.submission_date < s.submission_date --
        ) --on date
        = datediff(day, s.submission_date, "2016-03-01") + 1

select count(distinct hacker_id)
from (select distinct submission_date
    from submissions
    where s1.submission_date = s.submission_date
    ) s
where (select count(distinct s2.submission_date)
from submissions s2
where s2.hacker_id = s1.hacker_id
    and s2.submission_date < s.submission_date --
        ) --on date
        = datediff(day, s.submission_date, "2016-03-01") + 1

