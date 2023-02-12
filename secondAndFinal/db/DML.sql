--This file gets called from the initializer.py when the program first starts
--only adds few patients, few providers, and few test_results to demo with

--insert relations
--insert patient
insert into patient values ('1111222333AA', 0, 'aaa', 'apass', 'afirst alast', '2000/01/01', '6131112222', '75 Laurier Ave', 'Ottawa', 'ON', 'Canada', 'K1N 6N5');
insert into patient values ('4444555666BB', 1, 'bbb', 'bpass', 'bfirst blast', '2002/02/18', '6133334444', '74 Laurier Ave', 'Ottawa', 'ON', 'Canada', 'K1N 6N5');
--insert med_service_provider
insert into med_service_provider values('11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000', 'uottawa medical centre','73 Laurier Ave', 'Ottawa', 'ON', 'Canada', 'K1N 6N5', '6135556666', 'family');
insert into med_service_provider values('122f5b37-e0b8-42e0-8dcf-dc8c4aefc111', 'Phreesia medical centre', '72 Laurier Ave', 'Toronto', 'ON', 'Canada', 'K1N 6N5', '6137778888', 'family');
--insert test_results
--insert into test_result values ('33bf5b37-e0b8-42e0-8dcf-dc8c4aefc000', '2023/1/1', 148, 72, 34, 50) 1 having
--insert into test_result values ('44bf5b37-e0b8-42e0-8dcf-dc8c4aefc000', '2023/1/2', 85, 66, 27, 31) 0
--insert into test_result values ('55bf5b37-e0b8-42e0-8dcf-dc8c4aefc000', '2023/1/3', 168, 74, 38, 34) 1
insert into test_result values ('66bf5b37-e0b8-42e0-8dcf-dc8c4aefc000', '2023/1/1', 137, 40, 43, 33);
insert into test_result values ('33bf5b37-e0b8-42e0-8dcf-dc8c4aefc000', '2023/2/2', 148, 72, 34, 50);
insert into test_result values ('44bf5b37-e0b8-42e0-8dcf-dc8c4aefc000', '2022/2/2', 144, 71, 33, 49);
insert into test_result values ('55bf5b37-e0b8-42e0-8dcf-dc8c4aefc000', '2021/2/2', 142, 70, 32, 48);

--insert relation test_result_for_patient, which connects patient and test_results
insert into test_result_for_patient values ('1111222333AA', '33bf5b37-e0b8-42e0-8dcf-dc8c4aefc000');
insert into test_result_for_patient values ('1111222333AA', '44bf5b37-e0b8-42e0-8dcf-dc8c4aefc000');
insert into test_result_for_patient values ('1111222333AA', '55bf5b37-e0b8-42e0-8dcf-dc8c4aefc000');
insert into test_result_for_patient values ('4444555666BB', '66bf5b37-e0b8-42e0-8dcf-dc8c4aefc000');
--insert relation test_result_from_provider, which connects med_service_provider and test_results
insert into test_result_from_provider values ('11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000', '33bf5b37-e0b8-42e0-8dcf-dc8c4aefc000');
insert into test_result_from_provider values ('11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000', '44bf5b37-e0b8-42e0-8dcf-dc8c4aefc000');
insert into test_result_from_provider values ('122f5b37-e0b8-42e0-8dcf-dc8c4aefc111', '55bf5b37-e0b8-42e0-8dcf-dc8c4aefc000');
insert into test_result_from_provider values ('122f5b37-e0b8-42e0-8dcf-dc8c4aefc111', '66bf5b37-e0b8-42e0-8dcf-dc8c4aefc000');
--insert relation in_same_city, which connects med_service_provider and patient that are in the same city
insert into in_same_city values ('11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000', '1111222333AA', 'Ottawa');
insert into in_same_city values ('11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000', '4444555666BB', 'Ottawa');