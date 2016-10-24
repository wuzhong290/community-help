package com.letwgo.wechat.main;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.function.*;
import java.util.stream.Collectors;

/**
 * Created by wuzhong on 2016/10/22.
 */
public class StreamMain {

    public static void main(String[] args) {
        List<Person> persons = Arrays.asList(
                new Person("Max", 18),
                new Person("Peter", 23),
                new Person("Pamela", 23),
                new Person("David", 12));

        Integer sum = 0;
        Integer ageSum = persons.parallelStream()
                .filter(new FilterPredicate())
                .map(new MapFunction())
                .reduce(sum,
                        new ReduceBiFunction(),
                        new ReduceBinaryOperator()
                );
        System.out.println(ageSum);

        boolean flag = persons.stream().anyMatch(new FilterPredicate());
        boolean flag1 = persons.stream().allMatch(new FilterPredicate());
        System.out.println(flag +":"+flag1);

        List<Person> persons1 =persons
                .stream()
                .sorted(new SortComparator()).collect(Collectors.<Person>toList());
        //.forEach(new ForConsumer());
        System.out.println("");
    }
}

class Person {
    String name;
    int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return name;
    }
}

class FilterPredicate implements Predicate<Person>{


    @Override
    public boolean test(Person person) {
        boolean flag = person.age < 20;
        System.out.format("filter:flag =%s person=%s [%s]\n",flag,person, Thread.currentThread().getName());
        return flag;
    }
}

class MapFunction implements Function<Person,Person>{

    @Override
    public Person apply(Person person) {
        person.name = person.name.toUpperCase();
        System.out.format("map:person=%s [%s]\n",person, Thread.currentThread().getName());
        return person;
    }
}

class ReduceBiFunction implements BiFunction<Integer,Person,Integer>{
    @Override
    public Integer apply(Integer sum,Person p) {
        System.out.format("accumulator: sum=%s; person=%s [%s]\n",
                sum, p, Thread.currentThread().getName());
        return sum += p.age;
    }
}
class ReduceBinaryOperator implements BinaryOperator<Integer>{

    @Override
    public Integer apply(Integer sum1, Integer sum2) {
        System.out.format("combiner: sum1=%s; sum2=%s [%s]\n",
                sum1, sum2, Thread.currentThread().getName());
        return sum1 + sum2;
    }
}

class SortComparator implements Comparator<Person>{

    @Override
    public int compare(Person o1, Person o2) {
        return Integer.compare(o1.age,o2.age);
    }
}

class ForConsumer implements Consumer<Person>{

    @Override
    public void accept(Person person) {
        System.out.println(person);
    }
}