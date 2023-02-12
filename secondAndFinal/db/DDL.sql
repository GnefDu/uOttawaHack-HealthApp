--This file gets called from the initializer.py when the program first starts

--Initializes the schema with name 'public'.

--Deletes all previous tables / data, recreates it, then restore the default grants
drop schema public cascade;
create schema public;
grant all on schema public to postgres;
grant all on schema public to public;

--create tables
--entity patient
--patient's general information
--stores general information about the patient, data collected when a new patient signs up
create table patient
	(
		healthCardNumber varchar(12),
		gender integer not null, --0=male, 1=female, 2=others
		username varchar(10) not null,
		patient_password varchar(10) not null,
		full_name varchar(50) not null,
		date_of_birth varchar(10) not null,
		phone_number varchar(10) not null,
		main_address varchar(60) not null,
		city varchar(60) not null,
		province varchar(10) not null,
		country varchar(20) not null,
		postal_code varchar(7) not null,
		primary key (healthCardNumber)
	);
--entity med_service_provider
--medical service provider
--data collected when a new provider signs up, should be manually checked before being added
create table med_service_provider
	(
		pid varchar(36),
		fname varchar(60) not null,
		main_address varchar(60) not null,
		city varchar(60) not null,
		province varchar(10) not null,
		country varchar(20) not null,
		postal_code varchar(7) not null,
		phone_number varchar(10) not null,
		med_type varchar(60) not null,
		primary key (pid)
	);
--entity test_result
--entires of test result
--relates to both the patients and the provider
create table test_result
	(
		tid varchar(36),
		date_of_test varchar(10) not null,
		primary key(tid)
	);
--relation test_result_for_patient, it connects patient and test_result.
--on delete cascade to patient and test_result
--healthCardNumber, tid used as primary key
create table test_result_for_patient
	(
		healthCardNumber varchar(12),
		tid varchar(36),
		foreign key (healthCardNumber) references patient
		on delete cascade,
		foreign key (tid) references test_result
		on delete cascade,
		primary key(healthCardNumber, tid)
	);
--relation test_result_from_provider, it connects med_service_provider and test_result.
--on delete cascade to provider and test_result
--pid, tid used as primary key
create table test_result_from_provider
	(
		pid varchar(36),
		tid varchar(36),
		foreign key (pid) references med_service_provider
		on delete cascade,
		foreign key (tid) references test_result
		on delete cascade,
		primary key(pid, tid)
	);
--relation in_same_city, it connects med_service_provider and patient that are in the same city.
--on delete cascade to provider and patient
--pid, healthCardNumber used as primary key
create table in_same_city
	(
		pid varchar(36),
		healthCardNumber varchar(12),
		city varchar(60) not null,
		foreign key (pid) references med_service_provider
		on delete cascade,
		foreign key (healthCardNumber) references patient
		on delete cascade,
		primary key(pid, healthCardNumber)
	);
