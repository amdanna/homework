-- How many entries in the database are from Africa?
SELECT COUNT(*)
FROM countries
WHERE continent = 'Africa'
--56

-- What was the total population of Oceania in 2005?
SELECT SUM(population)
FROM population_years
JOIN countries ON countries.id = population_years.country_id
WHERE countries.continent = 'Oceania' AND population_years.year = 2005
--32.66

-- What is the average population of countries in South America in 2003?
SELECT AVG(population)
FROM population_years
JOIN countries ON countries.id = population_years.country_id
WHERE countries.continent = 'South America' AND population_years.year = 2003
--25.89

-- What country had the smallest population in 2007?
SELECT name, MIN(population)
FROM population_years
JOIN countries ON countries.id = population_years.country_id
WHERE population_years.year = 2007;
--Niue

-- What is the average population of Poland during the time period covered by this dataset?
SELECT name, AVG(population)
FROM population_years
JOIN countries ON countries.id = population_years.country_id
WHERE countries.name = 'Poland';
--38.56

-- How many countries have the word "The" in their name?
SELECT COUNT(*)
FROM countries
WHERE countries.name LIKE '%the%';
--4


-- What was the total population of each continent in 2010?

SELECT continent, SUM(population)
FROM population_years
JOIN countries ON countries.id = population_years.country_id
WHERE population_years.year = 2010
GROUP BY countries.continent;

Africa	1015.47846
Asia	4133.09148
Europe	723.06044
North America	539.7945600000002
Oceania	34.95696
South America	396.58234999999996
