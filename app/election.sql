

-- 
CREATE TABLE signin(uid varchar primary key not null, phone VARCHAR, email VARCHAR, created_at timestamp default now());

create table voter(id_voter serial primary key not null, first_name varchar, last_name varchar, dob date, cccd int, classes varchar, avatar_url text, achievement text, title varchar, gender varchar, uid varchar references signin(uid))

create table recommend(id_recommend serial primary key not null, id_voter serial references voter(id_voter), accept boolean)

create table "event"(id_event serial primary key not null, "event" varchar not null, "classed" varchar not null, start_at timestamp default now(), end_at timestamp not null, "position" varchar not null, txt_hash varchar not null,block_number varchar not NULL, status varchar, timestamp_txt varchar, address_from varchar, address_to varchar)

create table candidate(idCandidate serial primary key not null, vote int not null, accept boolean, winner boolean, txt_hash varchar not null, block_number varchar not null, status varchar, timestamp_txt varchar, address_from varchar, address_to varchar, id_voter serial references voter(id_voter))

create table event_candidate_cross_ref(id_event serial references "event"(id_event), idCandidate serial references candidate(idCandidate), unique(id_event,idCandidate))

create TABLE history(id serial primary key not null, txt_hash varchar not null, block_number varchar not null, status varchar, timestamp_txt varchar, address_from varchar, address_to varchar, vote_eth varchar, voter_eth varchar, vote_for serial references candidate(idCandidate), voter serial references voter(id_voter), "event" serial references "event"(id_event), "timestamp" timestamp default now())

--
delete from signin where uid = '3406950956202247'
delete from voter where uid = '3406950956202247'

select * from signin


insert
	into
	"event"("event","classed", end_at, "position", txt_hash, block_number)
values ('Bầu lớp phó','18IT5', timestamp '2022-11-30 23:59:00', 'Lớp trưởng','hash', '123')

insert
	into
	"event"("event","classed", end_at, "position", txt_hash, block_number)
values ('Bầu lớp trưởng','20IT1', timestamp '2022-12-10 23:59:00','Lớp phó', 'hash', '123')

insert into signin (uid, phone, email) values ('user1', '03612345','user1@gmail.com')
insert into signin (uid, phone, email) values ('user2', '03612344','user2@gmail.com')
insert into signin (uid, phone, email) values ('user3', '03612343','user3@gmail.com')
insert into signin (uid, phone, email) values ('user4', '03612342','user4@gmail.com')
insert into signin (uid, phone, email) values ('user5', '03612341','user5@gmail.com')

insert into voter (first_name, last_name, dob, cccd, classes, avatar_url, achievement, title, uid, gender)
values ('A', 'Tran Cong', timestamp '2000-3-1', 12345, '18IT5', 'https://avatar-ex-swe.nixcdn.com/singer/avatar/2020/08/12/f/2/d/1/1597212025646.jpg', 'Sinh viên 5 tốt', 'Sinh viên', 'user1', 'Nam')

insert into voter (first_name, last_name, dob, cccd, classes, avatar_url, achievement, title, uid, gender)
values ('Phuc', 'Do Hong', timestamp '1999-5-11', 12346, '18IT5', 'https://avatar-ex-swe.nixcdn.com/singer/avatar/2022/03/21/a/c/c/3/1647849383542.jpg', 'Sinh viên 5 tốt', 'Sinh viên', 'user2', 'Nam')

insert into voter (first_name, last_name, dob, cccd, classes, avatar_url, achievement, title, uid, gender)
values ('B', 'Nguyen Thi', timestamp '2000-5-16', 12347, '18IT5', 'https://avatar-ex-swe.nixcdn.com/singer/avatar/2022/10/27/4/2/b/e/1666842165030.jpg', 'Sinh viên 5 tốt', 'Sinh viên', 'user3', 'Nữ')

insert into voter (first_name, last_name, dob, cccd, classes, avatar_url, achievement, title, uid, gender)
values ('C', 'Tran', timestamp '2001-8-11', 12348, '18IT5', 'https://avatar-ex-swe.nixcdn.com/singer/avatar/2022/06/16/c/6/8/8/1655374371348.jpg', 'Sinh viên 5 tốt', 'Sinh viên', 'user4', 'Nam')

insert into voter (first_name, last_name, dob, cccd, classes, avatar_url, achievement, title, uid, gender)
values ('D', 'Nguyen Thi', timestamp '2000-10-20', 12349, '18IT5', 'https://avatar-ex-swe.nixcdn.com/singer/avatar/2022/09/06/8/9/f/3/1662436842575.jpg', 'Sinh viên 5 tốt', 'Sinh viên', 'user5', 'Nữ')


insert into candidate(vote, accept, id_voter) values (0, true, 11)
insert into candidate(vote, accept, id_voter) values (0, true, 12)
insert into candidate(vote, accept, id_voter) values (0, true, 13)
insert into candidate(vote, accept, id_voter) values (0, true, 14)
insert into candidate(vote, accept, id_voter) values (0, true, 15)

SELECT c.vote, c.accept , c.id_voter  , e."event" 
      FROM event_candidate_cross_ref sc 
INNER JOIN candidate c ON c.idcandidate  = sc.idcandidate 
INNER JOIN "event" e ON e.id_event  = sc.id_event  
     WHERE sc.id_event = 4 and c.accept = true
     
SELECT e.id_event , e."event", e.classed ,e.start_at ,e.end_at , p."position", count(*) as "so luong"
FROM event_candidate_cross_ref sc 
INNER JOIN candidate c ON c.idcandidate  = sc.idcandidate 
INNER JOIN "event" e ON e.id_event  = sc.id_event  
INNER JOIN "position" p ON p.id_position  = e.id_position  
WHERE sc.id_event = 4 and c.accept = true
group by e.id_event, e."event", e.classed ,e.start_at ,e.end_at , p."position"

SELECT e.id_event , e."event", e.classed ,e.start_at ,e.end_at , p."position", count(*) as "so luong"
FROM event_candidate_cross_ref sc 
INNER JOIN "event" e ON e.id_event  = sc.id_event  
INNER JOIN "position" p ON p.id_position  = e.id_position  
group by e.id_event, e."event", e.classed ,e.start_at ,e.end_at , p."position"

select count(*) from event_candidate_cross_ref eccr

select id_event , "event", "classed", start_at , end_at, "position"."position" from "event" inner join "position" on "event".id_position = "position".id_position order by "event".id_position


SELECT * From voter

insert into candidate(vote, accept, id_voter) values (0, true, 1)
insert into candidate(vote, accept, id_voter) values (0, true, 2)
insert into candidate(vote, accept, id_voter) values (0, true, 3)
insert into candidate(vote, accept, id_voter) values (0, true, 4)
insert into candidate(vote, accept, id_voter) values (0, true, 5)

SELECT * From candidate
SELECT * From "event"

INSERT into event_candidate_cross_ref(id_event, idCandidate) values (3, 1)
INSERT into event_candidate_cross_ref(id_event, idCandidate) values (3, 2)
INSERT into event_candidate_cross_ref(id_event, idCandidate) values (3, 3)
INSERT into event_candidate_cross_ref(id_event, idCandidate) values (4, 4)
INSERT into event_candidate_cross_ref(id_event, idCandidate) values (4, 5)


SELECT * from candidate
Select * from "event"
SELECT * from voter

SELECT can.idcandidate,can.vote, can.accept, can.winner, can.id_voter, 
e.id_event, e."event", e.classed, e.start_at, e.end_at, e."position", e.txt_hash, e.block_number,
v.id_voter, v.first_name, v.last_name, v.dob, v.cccd, v.classes, v.avatar_url, v.achievement, v.title,
v.gender, v.uid,
s.uid, s.phone, s.email, s.created_at
FROM "candidate" can
JOIN "event_candidate_cross_ref" cf ON can.idcandidate = cf.idcandidate
JOIN "event" e ON cf.id_event = e.id_event
LEFT JOIN "voter" v ON can.id_voter = v.id_voter
LEFT JOIN signin s ON s.uid = v.uid
WHERE e.id_event = 4;


-- New
CREATE TABLE signin(uid varchar primary key not null, phone VARCHAR, email VARCHAR, created_at timestamp default now());

create table voter(id_voter serial primary key not null, first_name varchar, last_name varchar, dob date, cccd int, classes varchar, avatar_url text, achievement text, title varchar, gender varchar, uid varchar references signin(uid))

create table recommend(id_recommend serial primary key not null, id_voter serial references voter(id_voter), accept boolean)

create table "event"(id_event serial primary key not null, "event" varchar not null, "classed" varchar not null, start_at timestamp default now(), end_at timestamp not null, "position" varchar not null, txt_hash varchar not null,block_number varchar not NULL, status varchar, timestamp_txt varchar, address_from varchar, address_to varchar)

create table candidate(idCandidate serial primary key not null, vote int not null, accept boolean, winner boolean, txt_hash varchar not null, block_number varchar not null, status varchar, timestamp_txt varchar, address_from varchar, address_to varchar, id_voter serial references voter(id_voter))

create table event_candidate_cross_ref(id_event serial references "event"(id_event), idCandidate serial references candidate(idCandidate), unique(id_event,idCandidate))

create TABLE history(id serial primary key not null, txt_hash varchar not null, block_number varchar not null, status varchar, timestamp_txt varchar, address_from varchar, address_to varchar, vote_eth varchar, voter_eth varchar, vote_for serial references candidate(idCandidate), voter serial references voter(id_voter), "event" serial references "event"(id_event), "timestamp" timestamp default now())



insert
	into
	"event"("event","classed", end_at, "position", txt_hash, block_number)
values ('Bầu lớp phó','18IT5', timestamp '2022-11-30 23:59:00', 'Lớp trưởng','hash', '123')

insert
	into
	"event"("event","classed", end_at, "position", txt_hash, block_number)
values ('Bầu lớp trưởng','20IT1', timestamp '2022-12-10 23:59:00','Lớp phó', 'hash', '123')

insert into signin (uid, phone, email) values 
('user1', '03612345','user1@gmail.com'),
('user2', '03612344','user2@gmail.com'),
('user3', '03612343','user3@gmail.com'),
('user4', '03612342','user4@gmail.com'),
('user5', '03612341','user5@gmail.com')

select * from signin
select * from voter
select * from "event" e 
select * from candidate c 

insert into voter (first_name, last_name, dob, cccd, classes, avatar_url, achievement, title, uid, gender)
values ('A', 'Tran Cong', timestamp '2000-3-1', 12345, '18IT5', 'https://avatar-ex-swe.nixcdn.com/singer/avatar/2020/08/12/f/2/d/1/1597212025646.jpg', 'Sinh viên 5 tốt', 'Sinh viên', 'user1', 'Nam')
,('Phuc', 'Do Hong', timestamp '1999-5-11', 12346, '18IT5', 'https://avatar-ex-swe.nixcdn.com/singer/avatar/2022/03/21/a/c/c/3/1647849383542.jpg', 'Sinh viên 5 tốt', 'Sinh viên', 'user2', 'Nam')
,('B', 'Nguyen Thi', timestamp '2000-5-16', 12347, '18IT5', 'https://avatar-ex-swe.nixcdn.com/singer/avatar/2022/10/27/4/2/b/e/1666842165030.jpg', 'Sinh viên 5 tốt', 'Sinh viên', 'user3', 'Nữ')
,('C', 'Tran', timestamp '2001-8-11', 12348, '18IT5', 'https://avatar-ex-swe.nixcdn.com/singer/avatar/2022/06/16/c/6/8/8/1655374371348.jpg', 'Sinh viên 5 tốt', 'Sinh viên', 'user4', 'Nam')
,('D', 'Nguyen Thi', timestamp '2000-10-20', 12349, '18IT5', 'https://avatar-ex-swe.nixcdn.com/singer/avatar/2022/09/06/8/9/f/3/1662436842575.jpg', 'Sinh viên 5 tốt', 'Sinh viên', 'user5', 'Nữ')

insert into candidate(vote, accept, winner,txt_hash ,block_number , id_voter) values 
(0, true, false, 'txthash','blocknumber', 1),
(0, true, false, 'txthash','blocknumber', 2),
(0, false, false, 'txthash','blocknumber', 3),
(0, false, false, 'txthash','blocknumber', 4),
(0, true, false, 'txthash','blocknumber', 5)


INSERT into event_candidate_cross_ref(id_event, idCandidate) values 
(1, 7),
(1, 8),
(1, 9),
(2, 10),
(2, 11);

SELECT 
can.idcandidate,can.vote, can.accept, can.winner, can.id_voter, 
can.txt_hash as "txt_hash_candidate", can.block_number as "block_number_candidate", can.status as "status_candidate",
can.timestamp_txt as "timestamp_txt_candidate", can.address_from as "address_from_candidate", can.address_to as "address_to_candidate",
e.id_event, e."event", e.classed, e.start_at, e.end_at, e."position", 
e.txt_hash as "txt_hash_event", e.block_number as "block_number_event", 
e.status as "status_event", e.timestamp_txt as "timestamp_txt_event" , e.address_from as "address_from_event" , e.address_to as "address_from_event",
v.id_voter, v.first_name, v.last_name, v.dob, v.cccd, v.classes, v.avatar_url, v.achievement, v.title,
v.gender, v.uid,
s.uid, s.phone, s.email, s.created_at
FROM "candidate" can
JOIN "event_candidate_cross_ref" cf ON can.idcandidate = cf.idcandidate
JOIN "event" e ON cf.id_event = e.id_event
LEFT JOIN "voter" v ON can.id_voter = v.id_voter
LEFT JOIN signin s ON s.uid = v.uid
WHERE e.id_event = 1 and can .accept =true;


SELECT can.idcandidate,can.vote, can.accept, can.winner, can.id_voter, 
e.id_event, e."event", e.classed, e.start_at, e.end_at, e."position", e.txt_hash, e.block_number,
v.id_voter, v.first_name, v.last_name, v.dob, v.cccd, v.classes, v.avatar_url, v.achievement, v.title,
v.gender, v.uid,
s.uid, s.phone, s.email, s.created_at
FROM "candidate" can
JOIN "event_candidate_cross_ref" cf ON can.idcandidate = cf.idcandidate
JOIN "event" e ON cf.id_event = e.id_event
LEFT JOIN "voter" v ON can.id_voter = v.id_voter
LEFT JOIN signin s ON s.uid = v.uid
WHERE e.id_event = 1;
