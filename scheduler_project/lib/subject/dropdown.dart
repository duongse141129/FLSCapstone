import 'package:flutter/material.dart';

class Dropdown extends StatefulWidget {
  const Dropdown({Key? key}) : super(key: key);

  @override
  State<Dropdown> createState() => _DropdownState();
}

class _DropdownState extends State<Dropdown> {
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
      appBar: AppBar(),
      body: Container(
        padding: EdgeInsets.all(10),
        child: Row(
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
      ),
    );
  }
}
