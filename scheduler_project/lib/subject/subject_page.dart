// ignore_for_file: prefer_const_literals_to_create_immutables, avoid_unnecessary_containers

import 'package:flutter/material.dart';

class SubjectPage extends StatefulWidget {
  @override
  State<SubjectPage> createState() => _SubjectPageState();
}

class _SubjectPageState extends State<SubjectPage> {
  String _selected = 'Software Engineering';
  List<String> departments = [
    'Software Engineering',
    'Computing Fundamental',
    'Information Technology Specialization',
    'Lab',
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Subject'),
        centerTitle: true,
        backgroundColor: Colors.green[700],
        leading: IconButton(
          onPressed: () {},
          icon: Icon(
            Icons.arrow_back_ios,
            color: Colors.white,
          ),
        ),
      ),
      body: Padding(
        padding: const EdgeInsets.only(top: 10, left: 20, right: 20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: <Widget>[
                Flexible(
                  child: Row(
                    children: <Widget>[
                      Text(
                        "Department",
                        style: TextStyle(fontSize: 20),
                      ),
                      Expanded(
                        child: Container(
                          padding: EdgeInsets.all(10),
                          decoration: BoxDecoration(
                            border: Border.all(width: 1, color: Colors.grey),
                            borderRadius: BorderRadius.circular(10),
                          ),
                          margin: EdgeInsets.only(left: 10),
                          child: DropdownButton<String>(
                            underline: Container(),
                            isExpanded: true,
                            hint: Text('Selected Department'),
                            value: _selected,
                            onChanged: (newValue) {
                              setState(() {
                                _selected = newValue as String;
                              });
                            },
                            items: departments
                                .map((val) => DropdownMenuItem(
                                      value: val,
                                      child: Text(val),
                                    ))
                                .toList(),
                          ),
                        ),
                      )
                    ],
                  ),
                )
              ],
            ),
            SizedBox(
              height: 10,
            ),
            Text(
              'List Subject in My Department',
              style: TextStyle(fontSize: 20),
            ),
            SizedBox(
              height: 10,
            ),
            Container(
              width: 60,
              height: 60,
              decoration: BoxDecoration(
                border: Border.all(width: 2, color: Colors.white),
                shape: BoxShape.circle,
                // You can use like this way or like the below line
                //borderRadius: new BorderRadius.circular(30.0),
                color: Colors.green[500],
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    'PRJ391',
                    style: TextStyle(color: Colors.white),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
